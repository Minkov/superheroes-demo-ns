import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { View } from "ui/core/view";

const animationSpan = 1000;

@Component({
    moduleId: module.id,
    selector: "AppLoader",
    styleUrls: [
        "./loader.component.css",
    ],
    templateUrl: "./loader.component.html",
})
export class LoaderComponent {
    public isLoading = true;

    @ViewChild("image") public imageRef: ElementRef;

    @Input() public set isBusy(value) {
        this.isLoading = value;
        if (value) {
            this.startAnimating();
        } else {
            this.stopAnimating();
        }
    }

    public startAnimating() {
        const image = this.imageRef.nativeElement as View;
        this.shrink(image);
    }

    public stopAnimating() {
        console.log("Stopped!");
    }

    public shrink(view: View) {
        view.animate({
            duration: animationSpan,
            scale: {
                x: 0,
                y: 1,
            },
        }).then(() => {
            this.expand(view);
        });
    }

    public expand(view: View) {
        view.animate({
            duration: animationSpan,
            scale: {
                x: 1,
                y: 1,
            },
        }).then(() => {
            this.shrink(view);
        });
    }
}
