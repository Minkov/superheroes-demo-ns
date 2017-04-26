"use strict";
var core_1 = require("@angular/core");
var enums = require("ui/enums");
var animationSpan = 1000;
var LoaderComponent = (function () {
    function LoaderComponent() {
        this.isLoading = true;
    }
    Object.defineProperty(LoaderComponent.prototype, "isBusy", {
        set: function (value) {
            this.isLoading = value;
            // this.startAnimating();
        },
        enumerable: true,
        configurable: true
    });
    LoaderComponent.prototype.startAnimating = function () {
        var image = this.imageRef.nativeElement;
        this.shrink(image);
    };
    LoaderComponent.prototype.stopAnimating = function () {
    };
    LoaderComponent.prototype.shrink = function (view) {
        var _this = this;
        view.animate({
            duration: 3000,
            curve: enums.AnimationCurve.easeIn,
            scale: {
                x: 0,
                y: 100,
            },
        }).then(function () {
            _this.expand(view);
        });
    };
    LoaderComponent.prototype.expand = function (view) {
        var _this = this;
        view.animate({
            duration: animationSpan,
            scale: {
                x: 1,
                y: 1,
            },
        }).then(function () {
            _this.shrink(view);
        });
    };
    return LoaderComponent;
}());
__decorate([
    core_1.ViewChild("image"),
    __metadata("design:type", core_1.ElementRef)
], LoaderComponent.prototype, "imageRef", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LoaderComponent.prototype, "isBusy", null);
LoaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "AppLoader",
        styleUrls: [
            "./loader.component.css",
        ],
        templateUrl: "./loader.component.html",
    })
], LoaderComponent);
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3RTtBQUV4RSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBVTNCLElBQWEsZUFBZTtJQVI1QjtRQVNXLGNBQVMsR0FBRyxJQUFJLENBQUM7SUF5QzVCLENBQUM7SUFyQ1ksc0JBQVcsbUNBQU07YUFBakIsVUFBa0IsS0FBSztZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2Qix5QkFBeUI7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCx3Q0FBYyxHQUFkO1FBQ0ksSUFBSSxLQUFLLEdBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQWEsR0FBYjtJQUNBLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sSUFBVTtRQUFqQixpQkFXQztRQVZHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU07WUFDdEMsS0FBSyxFQUFFO2dCQUNILENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxHQUFHO2FBQ1Q7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsSUFBVTtRQUF4QixpQkFVQztRQVRHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixLQUFLLEVBQUU7Z0JBQ0gsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUDtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQXZDdUI7SUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7OEJBQVcsaUJBQVU7aURBQUM7QUFFaEM7SUFBUixZQUFLLEVBQUU7Ozs2Q0FHUDtBQVJRLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUU7WUFDUCx3QkFBd0I7U0FDM0I7UUFDRCxXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7R0FDVyxlQUFlLENBMEMzQjtBQTFDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xudmFyIGVudW1zID0gcmVxdWlyZShcInVpL2VudW1zXCIpO1xuY29uc3QgYW5pbWF0aW9uU3BhbiA9IDEwMDA7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwiQXBwTG9hZGVyXCIsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgIFwiLi9sb2FkZXIuY29tcG9uZW50LmNzc1wiLFxuICAgIF0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2FkZXIuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZVJlZjogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgaXNCdXN5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdmFsdWU7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9XG5cbiAgICBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgICAgbGV0IGltYWdlID0gPFZpZXc+dGhpcy5pbWFnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnNocmluayhpbWFnZSk7XG4gICAgfVxuXG4gICAgc3RvcEFuaW1hdGluZygpIHtcbiAgICB9XG5cbiAgICBzaHJpbmsodmlldzogVmlldykge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbixcbiAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwYW5kKHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBhbmltYXRpb25TcGFuLFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hyaW5rKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=