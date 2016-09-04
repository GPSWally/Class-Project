import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContainer }  from './main-container.component';
import { ApiService } from "./api.service";
import { HTTP_PROVIDERS } from "@angular/http";
import { provideRouter } from "@angular/router";
import { routes } from "./routes";
// import { AuthService } from "./auth.service";
import { FormsModule } from "@angular/forms";
import { ChartService } from "./chart/chart_area.service";
import { FileService } from "./file/file_area.service";
import { NoteService } from "./note/note.service";
import { MapAreaService } from "./map/map_area.service";
import {GOOGLE_MAPS_PROVIDERS, GoogleMapsAPIWrapper} from 'angular2-google-maps/core';
import { MapPageComponent } from "./map.component";



// declarations for routes
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about.component";
// import { AuthComponent } from "./auth.component";

@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [ 
		MainContainer, 
		AppComponent, 
		AboutComponent, 
		MapPageComponent
	],
	bootstrap:    [ MainContainer ],
	providers:    [ ApiService, 
		...HTTP_PROVIDERS, 
		provideRouter(routes), 
		ChartService,
		NoteService,
		FileService,
		MapAreaService,
		...GOOGLE_MAPS_PROVIDERS,
		GoogleMapsAPIWrapper
		// AuthService 
	]
})
export class AppModule { }

