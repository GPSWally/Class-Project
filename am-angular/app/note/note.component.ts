import { Component } from "@angular/core";
declare let $;

@Component ({
	selector: "note_area",
	directives: [ ],
	template: `
		<border-box>
			<form method="post">
				<textarea id="textArea" cols="auto" rows="2" placeholder="Enter Field Notes"></textarea> 
				<input class="btn btn-success" type="submit" id="submit" value="Submit Notes" (click)="enterNote()"/>
			</form>
		</border-box>
	`,
	styles: [ `
		.btn-success {
			background-color: rgba(61,123,52, 0.7);
			color: rgba(255,229,109,0.9);
			border-color: black;
		}
		.btn-success:hover {
			background-color: rgba(61,123,52, 1.0);
		}
		form {
			height: 52px;
			margin-top: 10px;
			border-radius: 5px;
		}
		textarea {
			width: 85%;
		}
		input{
			float: left;
			padding-top: 5px;
			margin-top: 5px;
			margin-right: 8px;
		}
		div {
			font-size: 14px:
		}


	`
	]
})

export class NoteComponent {  

	enterNote() {
		$('#textArea').val(" ").empty();
	}


}
