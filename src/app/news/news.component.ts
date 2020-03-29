import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    const introText = document.getElementsByClassName("intro__text"),
      introBtn = document.getElementsByClassName("intro__btn");

    setTimeout(() => {
      introText[0].classList.add("start");
      introBtn[0].classList.add("start");
    }, 800);
  }
}
