(function (angular) {

	'use strict';

	angular.module('gc.metronome')
		.directive('gcMetronome', function () {
			return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'gcCtrl',
				scope: {},
				controller: function () {

					var vm = this;

				},
				link: function (scope, element) {

					var note = 4;
					var mesure = 4;
					var positions = [];
					var endMesure = 400;

					var svg = d3.select(element[0])
						.append('svg')
						.attr('width', 500)
						.attr('height', 500);

					createTimeLine(endMesure, mesure, note, positions);

					//var startY = 0;
					//var startMesure = 0;

					function getLine(position, taille) {
						var endY = 168;

						var start = taille ? endY / taille : 0;
						return {
							'x1': position,
							'y1': start,
							'x2': position,
							'y2': endY
						};
					}


					function createTimeLine(endPosition, mesure, note, positions) {

						var position = 0;
						var space = endPosition / mesure;
						for (var i = 0; i < mesure; i++) {
							svg.append('line')
								.attr(getLine(position))
								.attr('stroke', 'black');

							createSubLine(position, space, note, 2, positions);

							position += space;

							if (i === (mesure - 1)) {
								svg.append('line')
									.attr(getLine(position))
									.attr('stroke', 'black')
									.style('stroke-dasharray', ('3, 3'));
							}
						}
					}


					function createSubLine(start, space, note, taille, positions) {
						var position = start;
						for (var i = 1; i < note; i++) {

							positions.push(position);
							position += space / note;
							positions.push(position);

							svg.append('line')
								.attr(getLine(position, taille))
								.attr('stroke', 'black');
						}
					}



				}
			};
		});



})(angular); // jshint ignore:line