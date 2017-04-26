"use strict";
var core_1 = require("@angular/core");
var superherodetails_component_1 = require("./superheroes/details/superherodetails.component");
var superheroes_component_1 = require("./superheroes/list/superheroes.component");
// Ng2 in Browser: 
// import {RouterModule} from "@angular/router";
//NativeScript:
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/superheroes", pathMatch: "full" },
    { path: "superheroes", component: superheroes_component_1.SuperheroesComponent },
    { path: "superheroes/:id", component: superherodetails_component_1.SuperheroDetailsComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLCtGQUE2RjtBQUM3RixrRkFBK0U7QUFFL0UsbUJBQW1CO0FBQ25CLGdEQUFnRDtBQUVoRCxlQUFlO0FBQ2Ysc0RBQXNFO0FBSXRFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDM0QsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsc0RBQXlCLEVBQUU7Q0FDcEUsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBSjVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdXBlcmhlcm9EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vc3VwZXJoZXJvZXMvZGV0YWlscy9zdXBlcmhlcm9kZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3VwZXJoZXJvZXNDb21wb25lbnQgfSBmcm9tIFwiLi9zdXBlcmhlcm9lcy9saXN0L3N1cGVyaGVyb2VzLmNvbXBvbmVudFwiXG5cbi8vIE5nMiBpbiBCcm93c2VyOiBcbi8vIGltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbi8vTmF0aXZlU2NyaXB0OlxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9zdXBlcmhlcm9lc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInN1cGVyaGVyb2VzXCIsIGNvbXBvbmVudDogU3VwZXJoZXJvZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic3VwZXJoZXJvZXMvOmlkXCIsIGNvbXBvbmVudDogU3VwZXJoZXJvRGV0YWlsc0NvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=