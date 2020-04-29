(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['RegistrationService'];
    function MyInfoController(RegistrationService) {
        var myInfoCtrl = this;

        myInfoCtrl.isRegistered = RegistrationService.firstname !== '';
        if (myInfoCtrl.isRegistered) {
            myInfoCtrl.firstname = RegistrationService.firstname;
            myInfoCtrl.lastname = RegistrationService.lastname;
            myInfoCtrl.email = RegistrationService.email;
            myInfoCtrl.phone = RegistrationService.phone;
            myInfoCtrl.menuNumber = RegistrationService.menuNumber;
            myInfoCtrl.description = RegistrationService.description;
            myInfoCtrl.menuTitle = RegistrationService.menuTitle;
            myInfoCtrl.url = "/images/menu/" + myInfoCtrl.menuNumber + "/" + myInfoCtrl.menuNumber + ".jpg";
        }

    }

})();
