import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actionitems',
  templateUrl: './actionitems.component.html',
  styleUrls: ['./actionitems.component.css']
})
export class ActionitemsComponent implements OnInit {

  title = "Action items";
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
  	div.className += " action-items";
  	let element = document.getElementById("action-items-cards");
	element.appendChild(div);
	div.focus();
	this.timeCreated = new Date();
  }

}
