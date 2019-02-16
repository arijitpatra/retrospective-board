import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-generic-board",
  templateUrl: "./generic-board.component.html",
  styleUrls: ["./generic-board.component.css"]
})
export class GenericBoardComponent implements OnInit {
  @Input() title: string;
  @Input() values: any;
  @Input() boardType: string;

  constructor() {}

  ngOnInit() {
    // console.log(this.values);
    this.values = this.values.split(",");
  }

  /*Adds a new tile in the section 
  when the user clicks on the plus sign*/
  addTile() {
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = "Write your note here...";
    span.className = "placeholder";
    div.appendChild(span);
    div.contentEditable = "true";
    div.className = "card-base";
    div.className += " " + this.boardType;
    let element = document.getElementById(this.boardType + "-cards");
    element.appendChild(div);
    div.focus();
    div.onclick = function() {
      span.innerHTML = "";
    };
    div.onkeypress = function() {
      span.innerHTML = "";
    };

    // this.values.push({ content: "", isEditable: true });
  }
}
