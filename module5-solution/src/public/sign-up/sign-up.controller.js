(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpFormController', SignUpFormController);

    SignUpFormController.$inject = ['MenuService', 'RegistrationService'];
    function SignUpFormController(MenuService, RegistrationService) {
        var SignUpFormCtrl = this;

        SignUpFormCtrl.submitted = false;
        SignUpFormCtrl.successful = false;

        SignUpFormCtrl.getMenuItem = function (menunumber) {
            MenuService.getMenuItem(menunumber).
                then(
                    function (response) {
                        var data = response.data;

                        console.log(data);

                        var name = data.name;
                        var description = data.description;

                        RegistrationService.menuTitle = name;
                        RegistrationService.description = description;
                        RegistrationService.firstname = SignUpFormCtrl.firstname;
                        RegistrationService.lastname = SignUpFormCtrl.lastname;
                        RegistrationService.email = SignUpFormCtrl.email;
                        RegistrationService.phone = SignUpFormCtrl.phone;
                        RegistrationService.menuNumber = SignUpFormCtrl.menuNumber.match(/[a-zA-Z]+/g);

                        SignUpFormCtrl.submitted = true;
                        SignUpFormCtrl.successful = true;
                    },
                    function (error) {
                        console.log("we had a failed response");
                        SignUpFormCtrl.submitted = true;
                        SignUpFormCtrl.successful = false;
                    });
        }

    }

})();
