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
import { MapService } from "./map/map_area.service";
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';


// declarations for routes
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about.component";
// import { AuthComponent } from "./auth.component";

@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [ 
		MainContainer, 
		AppComponent, 
		AboutComponent 
	],
	bootstrap:    [ MainContainer ],
	providers:    [ ApiService, 
		...HTTP_PROVIDERS, 
		provideRouter(routes), 
		ChartService,
		NoteService,
		FileService,
		MapService,
		...GOOGLE_MAPS_PROVIDERS
		// AuthService 
	]
})
export class AppModule { }

