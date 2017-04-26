"use strict";
var core_1 = require("@angular/core");
var superheroes_service_1 = require("./../shared/superheroes.service");
var SuperheroesComponent = (function () {
    function SuperheroesComponent(service) {
        this.service = service;
        this.superheroes = [];
        this.isLoading = true;
    }
    SuperheroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (superheroes) {
            _this.superheroes = superheroes;
            _this.isLoading = false;
        });
    };
    return SuperheroesComponent;
}());
SuperheroesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "app-superheroes-list",
        styleUrls: [
            "./superheroes.component.css",
        ],
        templateUrl: "./superheroes.component.html",
    }),
    __metadata("design:paramtypes", [superheroes_service_1.SuperheroesService])
], SuperheroesComponent);
exports.SuperheroesComponent = SuperheroesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJoZXJvZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VwZXJoZXJvZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFHbEQsdUVBQXFFO0FBVXJFLElBQWEsb0JBQW9CO0lBSTdCLDhCQUNZLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBSmhDLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBSXBCLENBQUM7SUFFRSx1Q0FBUSxHQUFmO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTthQUNoQixTQUFTLENBQUMsVUFBQyxXQUFXO1lBQ25CLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxvQkFBb0I7SUFSaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFNBQVMsRUFBRTtZQUNQLDZCQUE2QjtTQUNoQztRQUNELFdBQVcsRUFBRSw4QkFBOEI7S0FDOUMsQ0FBQztxQ0FNdUIsd0NBQWtCO0dBTDlCLG9CQUFvQixDQWVoQztBQWZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3VwZXJoZXJvIH0gZnJvbSBcIi4vLi4vc2hhcmVkL3N1cGVyaGVyby5tb2RlbFwiO1xuaW1wb3J0IHsgU3VwZXJoZXJvZXNTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2hhcmVkL3N1cGVyaGVyb2VzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJhcHAtc3VwZXJoZXJvZXMtbGlzdFwiLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBcIi4vc3VwZXJoZXJvZXMuY29tcG9uZW50LmNzc1wiLFxuICAgIF0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdXBlcmhlcm9lcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBTdXBlcmhlcm9lc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHN1cGVyaGVyb2VzOiBTdXBlcmhlcm9bXSA9IFtdO1xuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc2VydmljZTogU3VwZXJoZXJvZXNTZXJ2aWNlLFxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5nZXRBbGwoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoc3VwZXJoZXJvZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cGVyaGVyb2VzID0gc3VwZXJoZXJvZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==