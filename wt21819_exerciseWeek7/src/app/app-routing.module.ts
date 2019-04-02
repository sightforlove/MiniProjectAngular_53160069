import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "page1"
  },
  {
    path: "page1",
    component: Page1Component
  },
  {
    path: "page2/:countryName",
    component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
