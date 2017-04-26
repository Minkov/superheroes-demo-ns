"use strict";
var core_1 = require("@angular/core");
var animationSpan = 1000;
var LoaderComponent = (function () {
    function LoaderComponent() {
        this.isLoading = true;
    }
    Object.defineProperty(LoaderComponent.prototype, "isBusy", {
        set: function (value) {
            this.isLoading = value;
            if (value) {
                this.startAnimating();
            }
            else {
                this.stopAnimating();
            }
        },
        enumerable: true,
        configurable: true
    });
    LoaderComponent.prototype.startAnimating = function () {
        var image = this.imageRef.nativeElement;
        this.shrink(image);
    };
    LoaderComponent.prototype.stopAnimating = function () {
        console.log("Stopped!");
    };
    LoaderComponent.prototype.shrink = function (view) {
        var _this = this;
        view.animate({
            duration: animationSpan,
            scale: {
                x: 0,
                y: 1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3RTtBQUd4RSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFVM0IsSUFBYSxlQUFlO0lBUjVCO1FBU1csY0FBUyxHQUFHLElBQUksQ0FBQztJQTZDNUIsQ0FBQztJQXpDWSxzQkFBVyxtQ0FBTTthQUFqQixVQUFrQixLQUFLO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBRU0sd0NBQWMsR0FBckI7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQXFCLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsSUFBVTtRQUF4QixpQkFVQztRQVRHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixLQUFLLEVBQUU7Z0JBQ0gsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUDtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxJQUFVO1FBQXhCLGlCQVVDO1FBVEcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLEtBQUssRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBM0N1QjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBa0IsaUJBQVU7aURBQUM7QUFFdkM7SUFBUixZQUFLLEVBQUU7Ozs2Q0FPUDtBQVpRLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUU7WUFDUCx3QkFBd0I7U0FDM0I7UUFDRCxXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7R0FDVyxlQUFlLENBOEMzQjtBQTlDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5jb25zdCBhbmltYXRpb25TcGFuID0gMTAwMDtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJBcHBMb2FkZXJcIixcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgXCIuL2xvYWRlci5jb21wb25lbnQuY3NzXCIsXG4gICAgXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvYWRlci5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQge1xuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgQFZpZXdDaGlsZChcImltYWdlXCIpIHB1YmxpYyBpbWFnZVJlZjogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgaXNCdXN5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5pbWFnZVJlZi5uYXRpdmVFbGVtZW50IGFzIFZpZXc7XG4gICAgICAgIHRoaXMuc2hyaW5rKGltYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcEFuaW1hdGluZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdG9wcGVkIVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hyaW5rKHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBhbmltYXRpb25TcGFuLFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwYW5kKHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBhbmltYXRpb25TcGFuLFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hyaW5rKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=