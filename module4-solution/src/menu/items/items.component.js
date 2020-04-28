(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemsComponent', {
            templateUrl: 'src/menu/items/templates/items.template.html',
            controller: function () {
              var menu_items = this.items.menu_items;
              console.log(menu_items);
            },
            bindings: {
                items: '<'
            }
        });
})();