(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesComponent', {
            templateUrl: 'src/menu/categories/templates/categories.template.html',
            bindings: {
                categories: '<'
            }
        })
})();