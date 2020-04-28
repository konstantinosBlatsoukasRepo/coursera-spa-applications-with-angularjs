(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/categories-list');

        // *** Set up UI states ***
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'src/menu/templates/home.template.html',
            })

            .state('categoriesList', {
                url: '/categories-list',
                templateUrl: 'src/menu/categories/templates/main-categories-list.template.html',
                controller: 'MenuAppController as categoriesList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{shortName}',
                templateUrl: 'src/menu/items/templates/main-items-list.template.html',
                controller: 'MainItemsController as mainItemsList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.shortName);
                        }
                    ]
                }
            });

    }

})();
