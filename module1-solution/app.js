(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";

        $scope.checkIfTooMuch = function () {
            if (typeof $scope.dishes === 'undefined') {
                $scope.message = "Empty";
            } else {
                var words = $scope.dishes.split(",");
                if (words.length === 0) {
                    $scope.message = "Empty";
                } else if (words.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }
        }
    }

})();
