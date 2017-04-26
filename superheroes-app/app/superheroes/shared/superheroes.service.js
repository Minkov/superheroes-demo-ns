"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
var url = "http://192.168.202.122:3001/api/superheroes";
var SuperheroesService = (function () {
    function SuperheroesService(http) {
        this.http = http;
    }
    SuperheroesService.prototype.getAll = function () {
        return this.http.get(url)
            .map(function (resp) { return resp.json(); });
    };
    SuperheroesService.prototype.getById = function (id) {
        return this.http.get(url + "/" + id)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJoZXJvZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cGVyaGVyb2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFHckMsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUkvQixJQUFNLEdBQUcsR0FBRyw2Q0FBNkMsQ0FBQztBQUcxRCxJQUFhLGtCQUFrQjtJQUczQiw0QkFDWSxJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNsQixDQUFDO0lBRUUsbUNBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBaUIsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsRUFBVTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBZSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FLUyxXQUFJO0dBSmIsa0JBQWtCLENBZ0I5QjtBQWhCWSxnREFBa0I7QUFrQi9CLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLDRHQUE0RztBQUM1RyxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixrSEFBa0g7QUFDbEgsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsMkhBQTJIO0FBQzNILGlCQUFpQjtBQUNqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWxheVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IFN1cGVyaGVybyB9IGZyb20gXCIuL3N1cGVyaGVyby5tb2RlbFwiO1xuXG5jb25zdCB1cmwgPSBcImh0dHA6Ly8xOTIuMTY4LjIwMi4xMjI6MzAwMS9hcGkvc3VwZXJoZXJvZXNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1cGVyaGVyb2VzU2VydmljZSB7XG4gICAgcHVibGljIHN1cGVyaGVyb2VzOiBTdXBlcmhlcm9bXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBnZXRBbGwoKTogT2JzZXJ2YWJsZTxTdXBlcmhlcm9bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXG4gICAgICAgICAgICAubWFwKChyZXNwKSA9PiByZXNwLmpzb24oKSBhcyBTdXBlcmhlcm9bXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U3VwZXJoZXJvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCArIFwiL1wiICsgaWQpXG4gICAgICAgICAgICAubWFwKChyZXNwKSA9PiByZXNwLmpzb24oKSBhcyBTdXBlcmhlcm8pO1xuICAgIH1cbn1cblxuLy8gdGhpcy5zdXBlcmhlcm9lcyA9IFtcbi8vICAgICAgICAgICAgIG5ldyBTdXBlcmhlcm8oXG4vLyAgICAgICAgICAgICAgICAgXCJCYXRtYW5cIixcbi8vICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS83MzZ4L2FlLzAzLzE4L2FlMDMxODEyMGU4Y2Y0MTU4NzA1MTQ0ZTJiN2ZlODI0LmpwZ1wiXG4vLyAgICAgICAgICAgICApLFxuLy8gICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcbi8vICAgICAgICAgICAgICAgICBcIlN1cGVyZ2lybFwiLFxuLy8gICAgICAgICAgICAgICAgIFwiaHR0cDovL2NkbjItd3d3LnN1cGVyaGVyb2h5cGUuY29tL2Fzc2V0cy91cGxvYWRzL2dhbGxlcnkvc3VwZXJnaXJsLTF4MDQtNS8xMDcwMjJfd2JfMDY1NGIuanBnXCJcbi8vICAgICAgICAgICAgICksXG4vLyAgICAgICAgICAgICBuZXcgU3VwZXJoZXJvKFxuLy8gICAgICAgICAgICAgICAgIFwiVGhlIEZsYXNoXCIsXG4vLyAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy50ZWNobm9idWZmYWxvLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNC9mbGFzaC1tb3ZpZS1kaXJlY3Rvci13cml0ZXItZ3JhaGFtZS1zbWl0aC5qcGdcIlxuLy8gICAgICAgICAgICAgKSxcbi8vICAgICAgICAgXTtcbiJdfQ==