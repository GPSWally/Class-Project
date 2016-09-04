import { RouterConfig } from "@angular/router";
import { AboutComponent } from "./about.component";
import { AppComponent } from  "./app.component";
import { MapPageComponent } from "./map.component";


export const routes: RouterConfig = [
	{
		path: '',
		component: AppComponent // , put comma in if I uncomment the next line
		// canActivate: AuthService
	},
	{
		path: 'map_page',
		component: MapPageComponent // , put comma in if I uncomment the next line
		// canActivate: AuthService
	},
	{
		path: 'about',
		component: AboutComponent // , put comma in if I uncomment the next line
		// canActivate: AuthService
	}
];
