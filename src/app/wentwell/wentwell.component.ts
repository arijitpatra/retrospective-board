import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wentwell',
  templateUrl: './wentwell.component.html',
  styleUrls: ['./wentwell.component.css']
})
export class WentwellComponent implements OnInit {

  //@Input() title: string;
  @Input() values: Array<string>;
  @Input() boardType: string;

  timeCreated: any;
  title = "What went well";

  constructor() { }

  ngOnInit() {
  	//console.log(this.title);
  	//this.values = this.values.split(",");
  	//console.log(typeof this.values);
  	//console.log(this.boardType);
  }

  /*Adds a new tile in the section 
  when the user clicks on the plus sign*/

  addTile() {
  	let div = document.createElement("div");
  	let span = document.createElement("span");
  	span.innerHTML = "Write your note here...";
  	div.appendChild(span);
  	div.contentEditable = "true";
  	div.className = "card-base";
  	div.className += " well-items";
  	let element = document.getElementById("well-items-cards");
	element.appendChild(div);
	div.focus();
	this.timeCreated = new Date();
  }

}
