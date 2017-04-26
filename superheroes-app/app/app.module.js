"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhEQUE0RDtBQUM1RCxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUUvQyxrRkFBZ0Y7QUFDaEYsZ0ZBQThFO0FBRTlFLDZEQUE4RDtBQXVCOUQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBckJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixrQ0FBZTtZQUNmLDRDQUFvQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQixtQ0FBbUM7WUFDbkMsNkNBQXNCO1NBQ3pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asd0NBQWtCO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFN1cGVyaGVyb2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vc3VwZXJoZXJvZXMvbGlzdC9zdXBlcmhlcm9lcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN1cGVyaGVyb2VzU2VydmljZSB9IGZyb20gXCIuL3N1cGVyaGVyb2VzL3NoYXJlZC9zdXBlcmhlcm9lcy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBTdXBlcmhlcm9lc0NvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICAvLyBIdHRwTW9kdWxlIGZyb20gIFwiQGFuZ3VsYXIvY29yZVwiXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VwZXJoZXJvZXNTZXJ2aWNlLFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BLFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==