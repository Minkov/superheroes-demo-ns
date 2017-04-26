"use strict";
var superherodetails_component_1 = require("./superheroes/details/superherodetails.component");
var app_routing_1 = require("./app.routing");
var loader_component_1 = require("./loader/loader.component");
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
            loader_component_1.LoaderComponent,
            superheroes_component_1.SuperheroesComponent,
            superherodetails_component_1.SuperheroDetailsComponent,
        ],
        imports: [
            app_routing_1.AppRoutingModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtGQUE2RjtBQUM3Riw2Q0FBaUQ7QUFDakQsOERBQTREO0FBQzVELHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsaURBQStDO0FBRS9DLGtGQUFnRjtBQUNoRixnRkFBOEU7QUFFOUUsNkRBQThEO0FBeUI5RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF2QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLGtDQUFlO1lBQ2YsNENBQW9CO1lBQ3BCLHNEQUF5QjtTQUM1QjtRQUNELE9BQU8sRUFBRTtZQUNMLDhCQUFnQjtZQUNoQix3Q0FBa0I7WUFDbEIsbUNBQW1DO1lBQ25DLDZDQUFzQjtTQUN6QjtRQUNELFNBQVMsRUFBRTtZQUNQLHdDQUFrQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1cGVyaGVyb0RldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9zdXBlcmhlcm9lcy9kZXRhaWxzL3N1cGVyaGVyb2RldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2xvYWRlci9sb2FkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFN1cGVyaGVyb2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vc3VwZXJoZXJvZXMvbGlzdC9zdXBlcmhlcm9lcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN1cGVyaGVyb2VzU2VydmljZSB9IGZyb20gXCIuL3N1cGVyaGVyb2VzL3NoYXJlZC9zdXBlcmhlcm9lcy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBTdXBlcmhlcm9lc0NvbXBvbmVudCxcbiAgICAgICAgU3VwZXJoZXJvRGV0YWlsc0NvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICAvLyBIdHRwTW9kdWxlIGZyb20gIFwiQGFuZ3VsYXIvY29yZVwiXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VwZXJoZXJvZXNTZXJ2aWNlLFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BLFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==