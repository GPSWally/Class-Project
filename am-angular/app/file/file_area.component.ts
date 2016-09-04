import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FileService } from "./file_area.service";

declare let $;

@Component ({
	selector: "file_area",
	template: `
		<div>
			<button class="btn btn-default display" (click)="downDisplay()">Soilmap Type 1</button>
			<button class="btn btn-default display" (click)="downDisplay1()">Soilmap Type 2</button>
			<button class="btn btn-default display" (click)="downDisplay2()">Soilmap Type 3</button>
			<button class="btn btn-primary display" (click)="upLoad()">upload to Server</button>
			<div>
				<div class="modal fade upLoadmodal">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 class="modal-title">Upload Shapefiles to Server</h4>
							</div>
							<div class="modal-body">
							<form id='myform' action="http://localhost:8000/upload">
								<input type="text" id="fileName" class="file_input_textbox" readonly="readonly" />
								<div class="file_input_div">
									<input id="fileInputButton" type="button" value="Select a Shape file, .shp" class="btn btn-primary" />
									<input type="file" name="shpFile" id="theFile" class="file_input_hidden btn btn-primary" onchange="javascript: document.getElementById('fileName').value = this.value.split('\\\\').slice(-1)[0]" />
								</div>
							</form>
							<div class="modal-footer">
								<button type="button" id="upLoadId" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal" (click)=fileUpload($event)>Upload to Server</button>
							</div>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->
			</div>
			<div>
				<div class="modal fade downLoadmodal">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 class="modal-title">Download file to computer</h4>
							</div>
							<div class="modal-body">
							<form id='myform' action="http://localhost:8000/upload">
								<input type="text" id="fileName" class="file_input_textbox" readonly="readonly" />
								<div class="file_input_div">
									<input id="fileInputButton" type="button" value="Select a GeoJSON file" class="btn btn-primary" />
									<input type="file" name="shpFile" id="theFile" class="file_input_hidden btn btn-primary" onchange="javascript: document.getElementById('fileName').value = this.value.split('\\\\').slice(-1)[0]" />
								</div>
							</form>
							<div class="modal-footer">
								<button type="button" id="upLoadId" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal" (click)=fileUpload($event)>Upload to Server</button>
							</div>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->
			</div>
		</div>
	`,
	styles: [`
		.top {
			margin-top: 10px;
			margin-bottom: 2.5px;
		}
		.display{
			margin-top: 2.5px;
			margin-bottom: 2.5px;
		}
		.file_input_textbox {
			height:34px;
			width:300px;
			float:left; 
		}
		.file_input_div     {
			position: relative;
			width:185px;
			height:34px;
			overflow: hidden; 
		}
		.file_input_button  {
			width: 180px;
			position:absolute;
			top:0px;
			border:1px solid #F0F0EE;
			padding:2px 8px 2px 8px; 
			font-weight:bold; 
			height:34px; 
			margin:0px; 
			margin-right:5px; 
		}
		.file_input_hidden  {
			height:34px;
			font-size:45px;
			width: 185px;
			position:absolute;
			left: 0px;
			top:0px;
			cursor:pointer;
			opacity:0;
			filter:alpha(opacity=0);
			-ms-filter:"alpha(opacity=0)";
			-khtml-opacity:0;
			-moz-opacity:0; }

		.btn-default, .btn-secondary{
			color: rgba(61,123,52,1.0);
			background-color: rgba(182,128,49,0.5);
			border-color: black;
		}
		.btn-default:hover, .btn-secondary:hover{
			background-color: rgba(182,128,49,0.95);
		}
		.btn-primary {
			background-color: rgba(61,123,52,0.9);
			color: rgba(255,229,109,0.9);
			border-color: black;
		}
		.btn-primary:hover{
			background-color: rgba(61,123,52, 1.0);
		}
		input[type=file] {
		}
		.display { 
			width: 10vw;
		}
	`]

})

export class FileComponent {

	public files: string ;

	constructor(private fileService: FileService) {

	}


	@Output() mapReset = new EventEmitter();

	function2() {
		this.mapReset.emit(null);
	}



/*		let mapFile;
		mapFile = this.fileService.downLoad()  // why is there a this on this?
			.subscribe(function(file){
				console.log(file);
			});
*/
		// display  a modal to select the file to download


	downDisplay() {
		let mapFile;
		mapFile = this.fileService.downLoad()
			.subscribe();
	}
	
	downDisplay1() {
		let mapFile;
		mapFile = this.fileService.downLoad1()
			.subscribe();
	}

	downDisplay2() {
		let mapFile;
		mapFile = this.fileService.downLoad2()
			.subscribe();
	}

	upLoad() {
		$(".upLoadmodal").modal();
	}

	downLoad() {
		$(".downLoadmodal").modal();
	}

	selectFile(name) {
		console.log("select file");		
		$('input').click(function(name){
			console.log("file is uploaded");
			console.log(name);
		});
		$(".filebutton").click(function() {
			var input = $(this).next().find('input');
			input.click();
		});

		$(".fileinput").change(function(){

			var file = $(this).val();
			var fileName = file.split("\\");
			var pai = $(this).parent().parent().prev();
			pai.html(fileName[fileName.length - 1]);
			event.preventDefault();
		});

	};

	fileUpload(event) {
		let fileinput: any = document.getElementById("theFile");


		

			$('#myform').fileUpload();
	


					// var data = new FormData();
					// data.append("shpFile", fileinput.files[0]);
					// console.log(data, fileinput.files);
	}
}
