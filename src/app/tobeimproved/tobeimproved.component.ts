import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tobeimproved',
  templateUrl: './tobeimproved.component.html',
  styleUrls: ['./tobeimproved.component.css']
})
export class TobeimprovedComponent implements OnInit {

  title = "What can be improved";
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
  	div.className += " improve-items";
  	let element = document.getElementById("improve-items-cards");
	element.appendChild(div);
	div.focus();
	this.timeCreated = new Date();
  }

}
