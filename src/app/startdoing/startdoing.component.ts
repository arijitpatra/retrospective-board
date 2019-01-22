import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startdoing',
  templateUrl: './startdoing.component.html',
  styleUrls: ['./startdoing.component.css']
})
export class StartdoingComponent implements OnInit {

  title = "Start doing";
  timeCreated: any;

  constructor() { }

  ngOnInit() {
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
  	div.className += " start-items";
  	let element = document.getElementById("start-items-cards");
	element.appendChild(div);
	div.focus();
	this.timeCreated = new Date();
  }

}
