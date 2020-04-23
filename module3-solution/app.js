(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'list-items.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'myCtrl',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var items = this;
     }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.searchTerm = '';

        narrowItDown.found = [];

        narrowItDown.getMatchedMenuItems = function (searchTerm) {
            MenuSearchService.getMatchedMenuItems()
                .then(function (response) {
                    var menuItems = response.data.menu_items;
                    // var itemsWithSearchWord = MenuSearchService.getItemsWithSearchTerm(searchTerm, menuItems);
                    narrowItDown.found = MenuSearchService.getItemsWithSearchTerm(searchTerm, menuItems);
                    console.log(searchTerm);
                    console.log(narrowItDown.found);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        narrowItDown.removeItem = function (index) {
            console.log(index);
            narrowItDown.found.splice(index, 1);
        };

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
            });

            return response;
        };

        service.getItemsWithSearchTerm = function (searchTerm, menuItems) {
            var itemsWithSearchWord = [];
            for (let index = 0; index < menuItems.length; index++) {
                const element = menuItems[index];
                if (element.description.includes(searchTerm)) {
                    itemsWithSearchWord.push(element);
                }
            }
            return itemsWithSearchWord;
        };
    }

})();
