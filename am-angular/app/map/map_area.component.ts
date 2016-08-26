import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component ({
	selector: 'map-area',
	directives: [GOOGLE_MAPS_DIRECTIVES],
	template: `
		<div>
			<sebm-google-map [latitude]="lat" [longitude]="lng">
				<sebm-google-map-marker [latitude]="lat" [longitude]="lng">
				</sebm-google-map-marker>
			</sebm-google-map>
		</div>
	`,
	styles: [ `
	.sebm-google-map-container {
		height: 100%;
	}
	`]
})

export class MapComponent { 
	title: string = 'My first angular2-google-maps project';
	lat: number = 40.015133;
	lng: number = -105.229740;
}
