import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "country/:cc", component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
