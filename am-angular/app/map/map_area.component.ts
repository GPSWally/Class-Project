import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper, GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { FileService } from "../file/file_area.service";

@Component ({
	selector: 'map-area',
	directives: [GOOGLE_MAPS_DIRECTIVES],
	template: `
		<div #map>
		<sebm-google-map [latitude]="lat" [longitude]="lng">
		</sebm-google-map>
		</div>
	`,
	styles: [ `
	div {
		height: 100%
	}
	.sebm-google-map-container {
		height: 100%;
	}
	`]
})

export class MapComponent { 

	constructor (private fileService: FileService, 
		private mapAPI: GoogleMapsAPIWrapper) {
	}
	@ViewChild('map') map: ElementRef; // part of #map

	title: string = 'My first angular2-google-maps project';
	lat: number = 40.015133;
	lng: number = -105.229740;



	ngOnInit() {
		this.fileService
			.mapFileEmitter
			.subscribe(function(res){
				console.log("asfasd");
				console.log(res);
				this.createMap(res);
			}.bind(this));
	}

	createMap(res) {
		let myMap = this.mapAPI.createMap(this.map.nativeElement, {
			zoom: 12,
			center: {lat: 41.106975, lng: -89.106631},

		});
	}
}
