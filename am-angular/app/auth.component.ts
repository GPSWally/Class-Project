import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
	selector: "auth",
	template: `
		<form class="form-inline" (submit)="authenticate()">
			<div class="form-group">
				<input 
					class="form-control" 
					type="text"
					name="username" 
					placeholder="Username"
					[(ngModel)]="loginInfo.username"
				/>
			</div>
			<div class="form-group">
				<input 
					class="form-control" 
					type="text"
					name="password" 
					placeholder="Password"
					[(ngModel)]="loginInfo.password"
				/>
			</div>
		</form>
			<div class="form-group">
				<button class="btn btn-info">{{buttonText}}</button>
				<button 
					class="btn btn-primary" 
					(click)="switchMode($event)"
					>{{switchText}}</button>
			</div>
	`
})

export class AuthComponent {
	mode: string = "login";

	buttonText: string = "Login";
	switchText: string = "Need to create an account?";

	loginInfo: {username: string, password: string} = {
		username: "",
		password: ""
	};

	constructor(private authService: AuthService,
		private router: Router
		) { }

	switchMode(evt) {
		evt.preventDefault();
		if (this.mode === "login") {
			this.mode = "signup";
			this.buttonText = "Sign Up";
			this.switchText = "Already have an account?";
		} else {
			this.mode = "login";
			this.buttonText = "Login";
			this.switchText = "Need to create an account?";
		}
	}

	authenticate() {
		if (!this.loginInfo.username || !this.loginInfo.password) {
			return;
		}
		this.authService
			.authenticate(this.mode, this.loginInfo)
			.subscribe(function(res) {
				if (res.status === "success") {
					this.router.navigate(['']);
				}
		}.bind(this));
	}
}


