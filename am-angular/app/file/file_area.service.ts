import { Injectable, EventEmitter } from "@angular/core";
import { ApiService } from "../api.service";


@Injectable()

export class FileService { 

	public mapFileEmitter = new EventEmitter();
	public mapFileEmitter1 = new EventEmitter();
	public mapFileEmitter2 = new EventEmitter();

	constructor(private apiService: ApiService) {
		console.log("hey constructor is running");
		// this.getAllItems().subscribe();
		console.log(this);
	}

	downLoad() {
		console.log("you are downloading a file");
		return this.apiService.get("/download")
			.do(function(res) { 
				console.log("called callback for downloading mike");
				this.mapFileEmitter.emit(res); // not sure what is going on here?
			}.bind(this));
	}

	downLoad1() {
		console.log("you are downloading a file");
		return this.apiService.get("/download1")
			.do(function(res) { 
				console.log("called callback for downloading brian");
				this.mapFileEmitter1.emit(res); // not sure what is going on here?
			}.bind(this));
	}

	downLoad2() {
		console.log("you are downloading a file");
		return this.apiService.get("/download2")
			.do(function(res) { 
				console.log("called callback for downloading glen");
				this.mapFileEmitter2.emit(res); // not sure what is going on here?
			}.bind(this));
	}

	upLoad() {
		console.log("you are uploading a file");
	}


}
