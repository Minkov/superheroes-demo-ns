import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

import { SuperheroesComponent } from "./superheroes/list/superheroes.component";
import { SuperheroesService } from "./superheroes/shared/superheroes.service";

import { NativeScriptHttpModule } from "nativescript-angular";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        SuperheroesComponent,
    ],
    imports: [
        NativeScriptModule,
        // HttpModule from  "@angular/core"
        NativeScriptHttpModule,
    ],
    providers: [
        SuperheroesService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AppModule { }

