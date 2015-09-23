(function (angular) {

	'use strict';

	angular.module('gc.metronome', [])
		.controller('metroController', MetroController);

	function MetroController() {

		var vm = this;

		vm.listeMesure = [1, 2, 3, 4, 5, 6, 7, 8];

	}



})(angular); // jshint ignore:line