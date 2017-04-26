"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var url = "http://192.168.43.140:3001/api/superheroes";
var SuperheroesService = (function () {
    function SuperheroesService(http) {
        this.http = http;
    }
    SuperheroesService.prototype.getAll = function () {
        return this.http.get(url)
            .map(function (resp) { return resp.json(); });
    };
    return SuperheroesService;
}());
SuperheroesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SuperheroesService);
exports.SuperheroesService = SuperheroesService;
// this.superheroes = [
//             new Superhero(
//                 "Batman",
//                 "https://s-media-cache-ak0.pinimg.com/736x/ae/03/18/ae0318120e8cf4158705144e2b7fe824.jpg"
//             ),
//             new Superhero(
//                 "Supergirl",
//                 "http://cdn2-www.superherohype.com/assets/uploads/gallery/supergirl-1x04-5/107022_wb_0654b.jpg"
//             ),
//             new Superhero(
//                 "The Flash",
//                 "https://www.technobuffalo.com/wp-content/uploads/2016/04/flash-movie-director-writer-grahame-smith.jpg"
//             ),
//         ]; 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJoZXJvZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cGVyaGVyb2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFHckMsaUNBQStCO0FBSS9CLElBQU0sR0FBRyxHQUFHLDRDQUE0QyxDQUFDO0FBR3pELElBQWEsa0JBQWtCO0lBRzNCLDRCQUNZLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQ2xCLENBQUM7SUFFRSxtQ0FBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFpQixFQUExQixDQUEwQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FLUyxXQUFJO0dBSmIsa0JBQWtCLENBVzlCO0FBWFksZ0RBQWtCO0FBYS9CLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLDRHQUE0RztBQUM1RyxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixrSEFBa0g7QUFDbEgsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsMkhBQTJIO0FBQzNILGlCQUFpQjtBQUNqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgU3VwZXJoZXJvIH0gZnJvbSBcIi4vc3VwZXJoZXJvLm1vZGVsXCI7XG5cbmNvbnN0IHVybCA9IFwiaHR0cDovLzE5Mi4xNjguNDMuMTQwOjMwMDEvYXBpL3N1cGVyaGVyb2VzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdXBlcmhlcm9lc1NlcnZpY2Uge1xuICAgIHB1YmxpYyBzdXBlcmhlcm9lczogU3VwZXJoZXJvW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsKCk6IE9ic2VydmFibGU8U3VwZXJoZXJvW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgICAgICAgLm1hcCgocmVzcCkgPT4gcmVzcC5qc29uKCkgYXMgU3VwZXJoZXJvW10pO1xuICAgIH1cbn1cblxuLy8gdGhpcy5zdXBlcmhlcm9lcyA9IFtcbi8vICAgICAgICAgICAgIG5ldyBTdXBlcmhlcm8oXG4vLyAgICAgICAgICAgICAgICAgXCJCYXRtYW5cIixcbi8vICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS83MzZ4L2FlLzAzLzE4L2FlMDMxODEyMGU4Y2Y0MTU4NzA1MTQ0ZTJiN2ZlODI0LmpwZ1wiXG4vLyAgICAgICAgICAgICApLFxuLy8gICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcbi8vICAgICAgICAgICAgICAgICBcIlN1cGVyZ2lybFwiLFxuLy8gICAgICAgICAgICAgICAgIFwiaHR0cDovL2NkbjItd3d3LnN1cGVyaGVyb2h5cGUuY29tL2Fzc2V0cy91cGxvYWRzL2dhbGxlcnkvc3VwZXJnaXJsLTF4MDQtNS8xMDcwMjJfd2JfMDY1NGIuanBnXCJcbi8vICAgICAgICAgICAgICksXG4vLyAgICAgICAgICAgICBuZXcgU3VwZXJoZXJvKFxuLy8gICAgICAgICAgICAgICAgIFwiVGhlIEZsYXNoXCIsXG4vLyAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy50ZWNobm9idWZmYWxvLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNC9mbGFzaC1tb3ZpZS1kaXJlY3Rvci13cml0ZXItZ3JhaGFtZS1zbWl0aC5qcGdcIlxuLy8gICAgICAgICAgICAgKSxcbi8vICAgICAgICAgXTsiXX0=