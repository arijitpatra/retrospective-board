import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BoardsDataServiceService {
  constructor(private httpService: HttpClient) {}

  getBoardData() {
    return this.httpService.get("../../assets/boardData.json");
  }
}
