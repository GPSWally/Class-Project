// Where all of our routes live.

import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";

@Component({
	selector: "main-container",
	directives: [ ...ROUTER_DIRECTIVES],
		template: `
		<div>
			<nav class="navbar navbar-default">
				<ul class="nav navbar-nav">
					<li [class.active]="router.isActive('/', true)">
						<a routerLink="/">Home</a>
					</li>
					<li [class.active]="router.isActive('/about', true)">
						<a routerLink="/about">About</a>
					</li>
				</ul>
			</nav>
			<router-outlet></router-outlet>
		</div>
	`
})
export class MainContainer {

	constructor ( public router: Router) { }
}
