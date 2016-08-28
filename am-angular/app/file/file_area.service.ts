import { Injectable, EventEmitter } from "@angular/core";
import { ApiService } from "../api.service";


@Injectable()

export class FileService { 

	public mapFileEmitter = new EventEmitter();

	constructor(private apiService: ApiService) {
		console.log("hey constructor is running");
		// this.getAllItems().subscribe();
		console.log(this);
	}

	downLoad() {
		console.log("you are downloading a file");
		return this.apiService.get("/download")
		.do(function(res) { 
			console.log("called callback for downloading");
			this.mapFileEmitter.emit(res); // not sure what is going on here?
		}.bind(this));
	}


}
