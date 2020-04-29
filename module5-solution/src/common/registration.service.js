(function () {
    "use strict";

    angular.module('common')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = [];
    function RegistrationService() {
        var service = this;

        service.firstname = '';
        service.lastname = '';
        service.email = '';
        service.phone = '';
        service.menuNumber = '';
    }

})();
