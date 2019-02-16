import { Component, OnInit } from "@angular/core";
import { BoardsDataServiceService } from "./services/boards-data-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Retrospective Board";
  boardData = [];

  constructor(private boardDataService: BoardsDataServiceService) {}

  ngOnInit() {
    this.getData();

    // for handling the click outside to save functionality after edting is done
    document.addEventListener("keypress", e => {
      const key = e.which || e.keyCode;
      if (key === 13) {
        const editable_elements = document.querySelectorAll(
          "[contenteditable=true]"
        );
        for (let i = 0; i < editable_elements.length; i++) {
          editable_elements[i].setAttribute("contenteditable", "false");
        }
      }
    });
  }

  // gets the board data
  getData() {
    this.boardDataService.getBoardData().subscribe((x: any) => {
      this.boardData = x.boardData;
      // this.boardData = this.boardData.map(section => {
      //   return {
      //     ...section,
      //     values: section.values.map(cardContent => ({
      //       ...cardContent,
      //       isEditable: false
      //     }))
      //   };
      // });
    });
  }
}
