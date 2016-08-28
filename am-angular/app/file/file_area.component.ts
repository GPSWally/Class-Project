import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FileService } from "./file_area.service";

@Component ({
	selector: "file_area",
	template: `
		<div>
			file area
		</div>
		<div>
			<button class="btn btn-default" (click)="downLoad()">download File to server</button>
			<button class="btn btn-default" (click)="downDisplay()">download & display</button>
			<button class="btn btn-primary" (click)="upLoad()">upload File to server</button>
		<div>
	`,
	styles: [`
		button {
			margin: 5px;
		}
	`]

})

export class FileComponent {  

	constructor(private fileService: FileService) {

	}


	downLoad() {
		let mapFile;
		mapFile = this.fileService.downLoad()  // why is there a this on this?
			.subscribe(function(file){
				console.log(file);
			});
		// display  a modal to select the file to download

	}

	downDisplay() {
		let mapFile;
		mapFile = this.fileService.downLoad()
			.subscribe();

	}

	upLoad() {
		// display a modal to select the file to upload to the server
	}

}
