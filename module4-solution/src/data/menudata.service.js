(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        return {
            getAllCategories: getAllCategories,
            getItemsForCategory: getItemsForCategory
        };

        function getAllCategories() {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json"),
            })
                .then(getAllCategoriesComplete)
                .catch(getAllCategoriesFailed);

            function getAllCategoriesComplete(response) {
                return response.data;
            }

            function getAllCategoriesFailed(error) {
                logger.error('XHR Failed for getAllCategories.' + error.data);
            }
        }

        function getItemsForCategory(categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
            })
                .then(getItemsForCategoryComplete)
                .catch(getItemsForCategoryFailed);

            function getItemsForCategoryComplete(response) {
                return response.data;
            }

            function getItemsForCategoryFailed(error) {
                logger.error('XHR Failed for getItemsForCategory.' + error.data);
            }
        }
    }

})();