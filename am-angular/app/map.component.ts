// what was here orignially from Angular site..
import { Component } from "@angular/core";
import { ChartComponent } from "./chart/chart_area.component";
// import { ChartService } from "./chart/chart_area.service";
import { NoteComponent } from "./note/note.component";
//  import { NoteService } from "./note/note.service";
import { FileComponent } from "./file/file_area.component";
import { FileService } from "./file/file_area.service";
import { MapAreaService } from "./map/map_area.service";
import { MapAreaComponent } from "./map/map_area.component";


@Component({
	selector: 'agrimeasures',
	directives: [ NoteComponent, FileComponent, MapAreaComponent, ChartComponent],
	template:  `
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-2 fileArea">
				<file_area>
				</file_area>
			</div>
			<div class="col-sm-10">
				<div class="row">
					<div class="col-sm-12 mapArea">
						<map-area>
						</map-area>
					</div>
				</div>
				<div class="row ">
					<div class="col-sm-12 noteArea">
						<note_area>
						</note_area>
					</div>
				</div>
			</div>
		<div>
	<div>
	`,
	styles: [`
		.col-sm-2{
			width: 12vw;
		}
		.col-sm-10{
			width: 83vw;
		}
		.sBorder{
			border: 2px solid black;
		}
		.mapArea {
			height: 65vh;
			background-color: green;
			padding: 2px;
			border-radius: 5px;
		}
		.chartArea {
			height: 20vh;
			background-color: lightgreen;
			border: 1px solid black;
		}
		.noteArea { 
			height: 11vh;
			background-color: rgba(182,128,49, 0.7);
			border: 1px solid black;
			border-radius: 5px; 
		}
		.fileArea {
			height: 76vh;
			background-color: rgba(255,229,109, 0.90);
			border-top: 1px solid black;
			border-left: 1px solid black;
			border-bottom: 1px solid black;
			border-radius: 5px;
		}

	`]
})

export class MapPageComponent { 

}

