"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
var url = "http://192.168.1.174:3001/api/superheroes";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJoZXJvZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cGVyaGVyb2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFHckMsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUkvQixJQUFNLEdBQUcsR0FBRywyQ0FBMkMsQ0FBQztBQUd4RCxJQUFhLGtCQUFrQjtJQUczQiw0QkFDWSxJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNsQixDQUFDO0lBRUUsbUNBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBaUIsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsRUFBVTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBZSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FLUyxXQUFJO0dBSmIsa0JBQWtCLENBZ0I5QjtBQWhCWSxnREFBa0I7QUFrQi9CLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLDRHQUE0RztBQUM1RyxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixrSEFBa0g7QUFDbEgsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsMkhBQTJIO0FBQzNILGlCQUFpQjtBQUNqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWxheVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IFN1cGVyaGVybyB9IGZyb20gXCIuL3N1cGVyaGVyby5tb2RlbFwiO1xuXG5jb25zdCB1cmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTc0OjMwMDEvYXBpL3N1cGVyaGVyb2VzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdXBlcmhlcm9lc1NlcnZpY2Uge1xuICAgIHB1YmxpYyBzdXBlcmhlcm9lczogU3VwZXJoZXJvW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsKCk6IE9ic2VydmFibGU8U3VwZXJoZXJvW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgICAgICAgLm1hcCgocmVzcCkgPT4gcmVzcC5qc29uKCkgYXMgU3VwZXJoZXJvW10pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN1cGVyaGVybz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwgKyBcIi9cIiArIGlkKVxuICAgICAgICAgICAgLm1hcCgocmVzcCkgPT4gcmVzcC5qc29uKCkgYXMgU3VwZXJoZXJvKTtcbiAgICB9XG59XG5cbi8vIHRoaXMuc3VwZXJoZXJvZXMgPSBbXG4vLyAgICAgICAgICAgICBuZXcgU3VwZXJoZXJvKFxuLy8gICAgICAgICAgICAgICAgIFwiQmF0bWFuXCIsXG4vLyAgICAgICAgICAgICAgICAgXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC9hZS8wMy8xOC9hZTAzMTgxMjBlOGNmNDE1ODcwNTE0NGUyYjdmZTgyNC5qcGdcIlxuLy8gICAgICAgICAgICAgKSxcbi8vICAgICAgICAgICAgIG5ldyBTdXBlcmhlcm8oXG4vLyAgICAgICAgICAgICAgICAgXCJTdXBlcmdpcmxcIixcbi8vICAgICAgICAgICAgICAgICBcImh0dHA6Ly9jZG4yLXd3dy5zdXBlcmhlcm9oeXBlLmNvbS9hc3NldHMvdXBsb2Fkcy9nYWxsZXJ5L3N1cGVyZ2lybC0xeDA0LTUvMTA3MDIyX3diXzA2NTRiLmpwZ1wiXG4vLyAgICAgICAgICAgICApLFxuLy8gICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcbi8vICAgICAgICAgICAgICAgICBcIlRoZSBGbGFzaFwiLFxuLy8gICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cudGVjaG5vYnVmZmFsby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvZmxhc2gtbW92aWUtZGlyZWN0b3Itd3JpdGVyLWdyYWhhbWUtc21pdGguanBnXCJcbi8vICAgICAgICAgICAgICksXG4vLyAgICAgICAgIF07XG4iXX0=