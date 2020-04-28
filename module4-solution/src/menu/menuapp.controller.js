(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['categories'];
    function MenuAppController(categories) {
        var menuAppCtrl = this;
        menuAppCtrl.categories = categories;
    }

})();