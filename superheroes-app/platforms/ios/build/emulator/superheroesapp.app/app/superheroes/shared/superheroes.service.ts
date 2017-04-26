import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";

import { Superhero } from "./superhero.model";

const url = "http://192.168.43.140:3001/api/superheroes";

@Injectable()
export class SuperheroesService {
    public superheroes: Superhero[];

    constructor(
        private http: Http,
    ) { }

    public getAll(): Observable<Superhero[]> {
        return this.http.get(url)
            .map((resp) => resp.json() as Superhero[]);
    }
}

// this.superheroes = [
//             new Superhero(
//                 "Batman",
//                 "https://s-media-cache-ak0.pinimg.com/736x/ae/03/18/ae0318120e8cf4158705144e2b7fe824.jpg"
//             ),
//             new Superhero(
//                 "Supergirl",
//                 "http://cdn2-www.superherohype.com/assets/uploads/gallery/supergirl-1x04-5/107022_wb_0654b.jpg"
//             ),
//             new Superhero(
//                 "The Flash",
//                 "https://www.technobuffalo.com/wp-content/uploads/2016/04/flash-movie-director-writer-grahame-smith.jpg"
//             ),
//         ];