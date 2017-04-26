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
            // this.startAnimating();
        },
        enumerable: true,
        configurable: true
    });
    LoaderComponent.prototype.startAnimating = function () {
        var image = this.imageRef.nativeElement;
        this.shrink(image);
    };
    LoaderComponent.prototype.shrink = function (view) {
        var _this = this;
        view.animate({
            duration: 3000,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3RTtBQUd4RSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFVM0IsSUFBYSxlQUFlO0lBUjVCO1FBU1csY0FBUyxHQUFHLElBQUksQ0FBQztJQXNDNUIsQ0FBQztJQWxDWSxzQkFBVyxtQ0FBTTthQUFqQixVQUFrQixLQUFLO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLHlCQUF5QjtRQUM3QixDQUFDOzs7T0FBQTtJQUVNLHdDQUFjLEdBQXJCO1FBQ0ksSUFBTSxLQUFLLEdBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLElBQVU7UUFBeEIsaUJBVUM7UUFURyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUU7Z0JBQ0gsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLEdBQUc7YUFDVDtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxJQUFVO1FBQXhCLGlCQVVDO1FBVEcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLEtBQUssRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBcEN1QjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBa0IsaUJBQVU7aURBQUM7QUFFdkM7SUFBUixZQUFLLEVBQUU7Ozs2Q0FJUDtBQVRRLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUU7WUFDUCx3QkFBd0I7U0FDM0I7UUFDRCxXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7R0FDVyxlQUFlLENBdUMzQjtBQXZDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5jb25zdCBhbmltYXRpb25TcGFuID0gMTAwMDtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJBcHBMb2FkZXJcIixcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgXCIuL2xvYWRlci5jb21wb25lbnQuY3NzXCIsXG4gICAgXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvYWRlci5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQge1xuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgQFZpZXdDaGlsZChcImltYWdlXCIpIHB1YmxpYyBpbWFnZVJlZjogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgaXNCdXN5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdmFsdWU7XG5cbiAgICAgICAgLy8gdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSA8Vmlldz50aGlzLmltYWdlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2hyaW5rKGltYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hyaW5rKHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5leHBhbmQodmlldyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBleHBhbmQodmlldzogVmlldykge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgICAgZHVyYXRpb246IGFuaW1hdGlvblNwYW4sXG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaHJpbmsodmlldyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==