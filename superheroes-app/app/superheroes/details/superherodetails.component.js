"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var superhero_model_1 = require("../shared/superhero.model");
var superheroes_service_1 = require("../shared/superheroes.service");
var SuperheroDetailsComponent = (function () {
    function SuperheroDetailsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.imageUrl = "http://images.buycostumes.com/mgen/merchandiser/dc-superhero-girls-batgirl-deluxe-child-costume-bc-809762.jpg";
        this.superhero = new superhero_model_1.Superhero();
    }
    SuperheroDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.isLoading = true;
        this.service.getById(id)
            .subscribe(function (superhero) {
            _this.superhero = superhero;
            _this.imageUrl = superhero.imgUrl;
            _this.isLoading = false;
        });
    };
    return SuperheroDetailsComponent;
}());
SuperheroDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "app-superhero-details",
        templateUrl: "./superherodetails.component.html",
    }),
    __metadata("design:paramtypes", [superheroes_service_1.SuperheroesService,
        router_1.ActivatedRoute])
], SuperheroDetailsComponent);
exports.SuperheroDetailsComponent = SuperheroDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJoZXJvZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdXBlcmhlcm9kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUVqRCw2REFBc0Q7QUFDdEQscUVBQW1FO0FBT25FLElBQWEseUJBQXlCO0lBS2xDLG1DQUNZLE9BQTJCLEVBQzNCLEtBQXFCO1FBRHJCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSjFCLGFBQVEsR0FBVywrR0FBK0csQ0FBQztRQUNuSSxjQUFTLEdBQWMsSUFBSSwyQkFBUyxFQUFFLENBQUM7SUFJMUMsQ0FBQztJQUVFLDRDQUFRLEdBQWY7UUFBQSxpQkFTQztRQVJHLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDbkIsU0FBUyxDQUFDLFVBQUMsU0FBUztZQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsV0FBVyxFQUFFLG1DQUFtQztLQUNuRCxDQUFDO3FDQU91Qix3Q0FBa0I7UUFDcEIsdUJBQWM7R0FQeEIseUJBQXlCLENBb0JyQztBQXBCWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgU3VwZXJoZXJvIH0gZnJvbSBcIi4uL3NoYXJlZC9zdXBlcmhlcm8ubW9kZWxcIjtcbmltcG9ydCB7IFN1cGVyaGVyb2VzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc3VwZXJoZXJvZXMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImFwcC1zdXBlcmhlcm8tZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3VwZXJoZXJvZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBTdXBlcmhlcm9EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9pbWFnZXMuYnV5Y29zdHVtZXMuY29tL21nZW4vbWVyY2hhbmRpc2VyL2RjLXN1cGVyaGVyby1naXJscy1iYXRnaXJsLWRlbHV4ZS1jaGlsZC1jb3N0dW1lLWJjLTgwOTc2Mi5qcGdcIjtcbiAgICBwdWJsaWMgc3VwZXJoZXJvOiBTdXBlcmhlcm8gPSBuZXcgU3VwZXJoZXJvKCk7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc2VydmljZTogU3VwZXJoZXJvZXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICApIHsgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdldEJ5SWQoaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChzdXBlcmhlcm8pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cGVyaGVybyA9IHN1cGVyaGVybztcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVXJsID0gc3VwZXJoZXJvLmltZ1VybDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==