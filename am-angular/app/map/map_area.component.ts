/// <reference path="../../typings/globals/google.maps/index.d.ts" />
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper, GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { FileService } from "../file/file_area.service";



@Component ({
	selector: 'map-area',
	directives: [GOOGLE_MAPS_DIRECTIVES],
	template: `
		<div #map>
			
		</div>
	`,
	styles: [ `
	div {
		height: 100%
	}
	`]
})

export class MapAreaComponent { 

	_map: google.maps.Map;

	constructor (private fileService: FileService) {
	}
	@ViewChild('map') mapElement: ElementRef; // part of #map


	ngOnInit() {
		this.createMap();
		this.fileService
			.mapFileEmitter
			.subscribe(function(res){
				this.addGeoJson(res);
			}.bind(this));
		this.fileService
			.mapFileEmitter1
			.subscribe(function(res){
				this.addGeoJson1(res);
			}.bind(this));
		this.fileService
			.mapFileEmitter2
			.subscribe(function(res){
				this.addGeoJson2(res);
			}.bind(this));
	}

	createMap() {
		console.log("calling create map");
		console.log(this.mapElement.nativeElement);
		this._map = new google.maps.Map(this.mapElement.nativeElement, {
			zoom: 8,
			center: {lat: 40.015133, lng: -105.229740},

		});
	}

	addGeoJson(res) {
		this._map = new google.maps.Map(this.mapElement.nativeElement, {
			zoom: 14,
			center: {lat: 41.094865, lng: -89.109572},
			
			mapTypeId: google.maps.MapTypeId.HYBRID,
		});
		this._map.data.addGeoJson(res);
		this._map.data.setStyle(function(feature) {
			var color = 'purple';
			var soilType = '';
				color = feature.getProperty('color');
				soilType = feature.getProperty('MUSYM');
			return ({  
				fillColor: color,
				strokeColor: color,
				strokeWeight: 1,
				text: soilType,
			});
			// fillColor: 'green',

		});
	};

		addGeoJson1(res) {
		this._map = new google.maps.Map(this.mapElement.nativeElement, {
			zoom: 15,
			center: {lat: 41.106975, lng: -89.106631},
			mapTypeId: google.maps.MapTypeId.HYBRID,
		});
		this._map.data.addGeoJson(res);
		this._map.data.setStyle(function(feature) {
			var color = 'purple';
			var soilType = '';
				color = feature.getProperty('color');
				soilType = feature.getProperty('MUSYM');
			return ({  
				fillColor: color,
				strokeColor: color,
				strokeWeight: 1,
				text: soilType,
			});
			// fillColor: 'green',

		});
	};

		addGeoJson2(res) {
		this._map = new google.maps.Map(this.mapElement.nativeElement, {
			zoom: 15,
			center: {lat: 41.225588, lng: -88.850529},
			mapTypeId: google.maps.MapTypeId.HYBRID,
		});
		this._map.data.addGeoJson(res);
		this._map.data.setStyle(function(feature) {
			var color = 'purple';
			var soilType = '';
				color = feature.getProperty('color');
				soilType = feature.getProperty('MUSYM');
			return ({  
				fillColor: color,
				strokeColor: color,
				strokeWeight: 1,
				text: soilType,
			});
			// fillColor: 'green',

		});
	};
}

/* http://stackoverflow.com/questions/1056330/how-to-display-a-label-next-to-a-marker-for-google-maps
 How to put labels on the soil type maps to show soil type.  Maybe a better ides is to put this in
 the chart area with color beside it.

 https://developers.google.com/maps/documentation/javascript/examples/control-custom - to 
 draw a circle.

 How to get the mouse position on a click..
http://stackoverflow.com/questions/13984338/get-map-latitude-longitude-from-mouse-position
*/











