"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var superheroes_component_1 = require("./superheroes/list/superheroes.component");
var superheroes_service_1 = require("./superheroes/shared/superheroes.service");
var nativescript_angular_1 = require("nativescript-angular");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent,
        ],
        declarations: [
            app_component_1.AppComponent,
            superheroes_component_1.SuperheroesComponent,
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            // HttpModule from  "@angular/core"
            nativescript_angular_1.NativeScriptHttpModule,
        ],
        providers: [
            superheroes_service_1.SuperheroesService,
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsaURBQStDO0FBRS9DLGtGQUFnRjtBQUNoRixnRkFBOEU7QUFFOUUsNkRBQThEO0FBc0I5RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFwQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLDRDQUFvQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQixtQ0FBbUM7WUFDbkMsNkNBQXNCO1NBQ3pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asd0NBQWtCO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBTdXBlcmhlcm9lc0NvbXBvbmVudCB9IGZyb20gXCIuL3N1cGVyaGVyb2VzL2xpc3Qvc3VwZXJoZXJvZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdXBlcmhlcm9lc1NlcnZpY2UgfSBmcm9tIFwiLi9zdXBlcmhlcm9lcy9zaGFyZWQvc3VwZXJoZXJvZXMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFN1cGVyaGVyb2VzQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIC8vIEh0dHBNb2R1bGUgZnJvbSAgXCJAYW5ndWxhci9jb3JlXCJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTdXBlcmhlcm9lc1NlcnZpY2UsXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuXG4iXX0=