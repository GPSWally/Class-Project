import { Component } from "@angular/core";

@Component({
	selector: "about",
	template: `
		<div><h3>About AgriMeasures</h3></div>
		<div class="jumbotron">
			<div class="textBack">
				<div><h4>AgriMeasures was created to fill a very unique need in the agriculture market.  Traditional providers of chemical, fertilizer and seeds now have a new option for third party product research.  At AgriMeasures, we are able to compile all your data to provide a much stronger analysis to validate your claims and explain multiple effects.</h4></div>  
	 
				<div><h4>You have a wealth of data sitting out there, ready for harvest.  Some of that data could produce economical and ecological results. Contact us today to see what we can do for you.</h4></div>
				<div><h4>Data Collection/Automated Delivery Systems/Water Management/Nutrient Evaluation/Product Testing/Plant Driven Systems</h4></div>
				<div><h4>AgriMeasures will custom design your research project using our extensive knowlege of the latest data collection instruments available on today's market.  We can design methods to discover how a product works both above and below ground.  We can uncover better methods of application and timing, leading to more consistent results using your product.  As use directions are validated, this can lead to stronger sales growth for your company.  We also provide training for your sales force or dealers on how to demonstrate your product's benefits at a level your customers will understand.  This will guide them to well informed management decisions.</h4></div>
			</div>
		</div>
		`,
styles: [`
		.jumbotron {
			background-image: url("../resources/Irrigation_Pivot.jpg");
			height: 60vh;
			background-position: center center;
			overflow:hidden;
			background-size: cover;
		}
		.textBack {
			background-color: rgba(255, 229, 109, 0.75);
			padding: 10px;
			margin-bottom: 10px;
			margin-left: 150px;
			margin-right: 150px;
			border: 2px solid black;
			border-radius: 25px;
		}
		h3 {
			color: rgb(61,123,52);
		}
`
]
})

export class AboutComponent { }
