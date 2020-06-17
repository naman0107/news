import { Component, OnInit, Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
@Injectable({
  providedIn: "root",
})
export class HomeComponent implements OnInit {
  newArticles: any = [];
  url: string;

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.url =
        "https://newsapi.org/v2/top-headlines?country=" +
        params.cc +
        "&apiKey=ddca9df7dc5f46e49b6276694711cf0e";

      this.newArticles = [];

      this.apiService.getArticles(this.url).subscribe((res) => {
        for (let i = 0; i < res.articles.length; i++) {
          this.newArticles.push(res.articles[i]);
        }
      });
    });
  }
  ngOnInit() {}
}
