// what was here orignially from Angular site..
import { Component } from "@angular/core";
import { ChartComponent } from "./chart/chart_area.component";
// import { ChartService } from "./chart/chart_area.service";
import { NoteComponent } from "./note/note.component";
//  import { NoteService } from "./note/note.service";
import { FileComponent } from "./file/file_area.component";
import { FileService } from "./file/file_area.service";
import { MapAreaComponent } from "./map/map_area.component";
import { MapPageComponent } from "./map.component";
// import { MapService } from "./map/map_area.service";


@Component({
	selector: 'agrimeasures',
	directives: [ ],
	template:  `
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12">
					<img src="../resources/sunset.jpg" alt="background image">
			</div>
		</div>
	</div>

	`,
	styles: [`

		img {
			width: 800px;
			padding-top: 10px;
			padding-bottom: 10px;
		}

		col-sm-12{
			align-content: center;
		}

		.container-fluid {
			height: ;
			align-content: center;
		}
		.row {
			align-content: center;
			background-position: center;
			text-align: center;
			background-color: rgba(61,123,52, 0.6);
		}
		.photo {
			padding: 0px;
			margin: 10px;
			border: 10px;
			position: absolute;
			height: 60vh;
			width: 92%;
			background-position: center center;
			overflow:hidden;
			background-size: cover;

		}

	`]
})

export class AppComponent { 

}

