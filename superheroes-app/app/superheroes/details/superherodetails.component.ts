import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Superhero } from "../shared/superhero.model";
import { SuperheroesService } from "../shared/superheroes.service";

@Component({
    moduleId: module.id,
    selector: "app-superhero-details",
    templateUrl: "./superherodetails.component.html",
})
export class SuperheroDetailsComponent implements OnInit {
    public isLoading: boolean;

    public imageUrl: string = "http://images.buycostumes.com/mgen/merchandiser/dc-superhero-girls-batgirl-deluxe-child-costume-bc-809762.jpg";
    public superhero: Superhero = new Superhero();
    constructor(
        private service: SuperheroesService,
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() {
        const id = this.route.snapshot.params["id"];
        this.isLoading = true;
        this.service.getById(id)
            .subscribe((superhero) => {
                this.superhero = superhero;
                this.imageUrl = superhero.imgUrl;
                this.isLoading = false;
            });
    }
}