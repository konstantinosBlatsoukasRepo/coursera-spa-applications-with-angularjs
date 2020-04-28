(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemsComponent', {
            templateUrl: 'src/menu/items/templates/items.template.html',
            bindings: {
                items: '<'
            }
        });
})();