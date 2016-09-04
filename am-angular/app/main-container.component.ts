// Where all of our routes live.

import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";

@Component({
	selector: "main-container",
	directives: [ ...ROUTER_DIRECTIVES],
		template: `
		<div class="title">
			<h2>AgriMeasures</h2><h4>A Prescription Irrigation Company</h4>
		</div>
		<div>
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<ul class="nav navbar-nav">
						<li [class.active]="router.isActive('/', true)">
							<a routerLink="/">Home</a>
						</li>
						<li [class.active]="router.isActive('/map_page', true)">
							<a routerLink="/map_page">Map</a>
						</li>
						<li [class.active]="router.isActive('/about', true)">
							<a routerLink="/about">About</a>
						</li>
					</ul>
				</div>
			</nav>
			<router-outlet></router-outlet>
		</div>
		<footer class="footer">
			<p>AgriMeasures © 2016<p>
		</footer>
	`,
	styles: [`
	footer {
		float: right;
	}
		p {
			float: center;
		}
		.title {
			margin-bottom: 5px
		}
		h2 {
			width: 30%;
			height: 60px;
			margin-right: 0px

			padding: 0;
			display: inline;
			color: black;
		}
		h4 {
			width: 30%;
			height: 60px;
			margin-left: 40px;
			padding: 0;
			display: inline;
			color: rgba(61,123,52,1.0);
		}


		.navbar-default {
			border: 1px solid black; 
			font-size: 20px;
			color: white;
		}

		.navbar {
			background-color: rgba(61,123,52, 0.7);
			color: blue;
		}
		li:hover {
			background-color: rgb(255,229,109);
			font-size: 25px;
			color: violet;
		}
		a {
			color: red;
		}
		.navbar-default .navbar-nav {
			background-color: rgb();
			color: yellow;
		}

		.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
			color: rgba(255,221,0,1.0);
			background-color: rgba(182,123,49, 1.0);
		}
		.navbar-default .navbar-nav>li>a {
			color: rgba(255,221,0,1.0);
		}

		.navbar-default .navbar-nav>li>a:hover {
			color: rgba(61,123,52,1.0);
		}
`
]
})

export class MainContainer {

	constructor ( public router: Router) { }
}
