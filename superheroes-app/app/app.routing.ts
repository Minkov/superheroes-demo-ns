import { NgModule } from "@angular/core";

import { SuperheroDetailsComponent } from "./superheroes/details/superherodetails.component";
import { SuperheroesComponent } from "./superheroes/list/superheroes.component"

// Ng2 in Browser: 
// import {RouterModule} from "@angular/router";

//NativeScript:
import {NativeScriptRouterModule } from "nativescript-angular/router";

import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/superheroes", pathMatch: "full" },
    { path: "superheroes", component: SuperheroesComponent },
    { path: "superheroes/:id", component: SuperheroDetailsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
