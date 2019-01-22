import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Retrospective Board';

  /*boardData = [
	  {
	  	"header" : "What went well",
	  	"values" : [],
	  	"boardType" : "aalIzzWell"
	  },
	  {
	  	"header" : "What needs improvement",
	  	"values" : ["something", "something", "something"],
	  	"boardType" : "improve"
	  },
	  {
	  	"header" : "Start doing",
	  	"values" : ["something", "something", "something"],
	  	"boardType" : "startNow"
	  },
	  {
	  	"header" : "Action items",
	  	"values" : ["something", "something", "something"],
	  	"boardType" : "action"
	  }
  ];*/

  ngOnInit() {
    document.addEventListener('keypress', (e) => {
  		const key = e.which || e.keyCode;
    	if (key === 13) {
    		var editable_elements = document.querySelectorAll('[contenteditable=true]');
			for(var i=0; i < editable_elements.length; i++) {
    			editable_elements[i].setAttribute('contenteditable', 'false');
			}
		}
  	});
  }
}