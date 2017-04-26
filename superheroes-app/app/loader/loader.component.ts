import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
var enums = require("ui/enums");
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

    @ViewChild("image") imageRef: ElementRef;

    @Input() public set isBusy(value) {
        this.isLoading = value;
        // this.startAnimating();
    }

    startAnimating() {
        let image = <View>this.imageRef.nativeElement;
        this.shrink(image);
    }

    stopAnimating() {
    }

    shrink(view: View) {
        view.animate({
            duration: 3000,
                curve: enums.AnimationCurve.easeIn,
            scale: {
                x: 0,
                y: 100,
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
