import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { SuperheroesComponent } from './superheroes/list/superheroes.component';

const routes: Routes = [
    { path: "", redirectTo: "/superheroes", pathMatch: "full" },
    { path: "superheroes", component: SuperheroesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }