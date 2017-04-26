import { Component, OnInit } from "@angular/core";

import { Superhero } from "./../shared/superhero.model";
import { SuperheroesService } from "./../shared/superheroes.service";

@Component({
    moduleId: module.id,
    selector: "app-superheroes-list",
    styleUrls: [
        "./superheroes.component.css",
    ],
    templateUrl: "./superheroes.component.html",
})
export class SuperheroesComponent implements OnInit {
    public superheroes: Superhero[] = [];
    public isLoading = true;

    constructor(
        private service: SuperheroesService,
    ) { }

    public ngOnInit() {
        this.service.getAll()
            .subscribe((superheroes) => {
                this.superheroes = superheroes;
                this.isLoading = false;
            });
    }
}
