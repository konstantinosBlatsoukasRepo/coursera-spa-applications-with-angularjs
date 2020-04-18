(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.toBuyItems = ShoppingListCheckOffService.toBuyItems;

    toBuy.removeAndAddToBoughtItems = function (index) {
      ShoppingListCheckOffService.removeAndAddToBoughtItems(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.boughtItems = ShoppingListCheckOffService.boughtItems;

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var boughtItems = [];
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "eggs", quantity: 10 },
      { name: "pork", quantity: 10 },
      { name: "cakes", quantity: 10 },
      { name: "bananas", quantity: 10 }];

    service.toBuyItems = toBuyItems;
    service.boughtItems = boughtItems;

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };

      items.push(item);
    };

    service.removeAndAddToBoughtItems = function (itemIndex) {
      var removedItem = service.removeToBuyItem(itemIndex)[0];
      service.addToBoughtItems(removedItem);
    }

    service.addToBoughtItems = function (item) {
      boughtItems.push(item);
    }

    service.removeToBuyItem = function (itemIndex) {
      return toBuyItems.splice(itemIndex, 1);
    };

  }

})();
