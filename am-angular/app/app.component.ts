// what was here orignially from Angular site..
import { Component } from "@angular/core";
import { ChartComponent } from "./chart/chart_area.component";
// import { ChartService } from "./chart/chart_area.service";
import { NoteComponent } from "./note/note.component";
//  import { NoteService } from "./note/note.service";
import { FileComponent } from "./file/file_area.component";
import { FileService } from "./file/file_area.service";
import { MapComponent } from "./map/map_area.component";
// import { MapService } from "./map/map_area.service";


@Component({
	selector: 'agrimeasures',
	directives: [ NoteComponent, FileComponent, MapComponent, ChartComponent],
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
					<div class="col-sm-12 chartArea">
						<chart-area>
						</chart-area>
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
		.mapArea {
			height: 65vh;
			background-color: green;
			padding: 2px;
		}
		.chartArea {
			height: 20vh;
			background-color: lightgreen;
		}
		.noteArea { 
			height: 5vh;
			background-color: red; 
		}
		.fileArea {
			height: 90vh;
			background-color: lightblue;
		}

	`]
})

export class AppComponent { 

}

