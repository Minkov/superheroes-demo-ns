"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
var url = "http://localhost:3001/api/superheroes";
var SuperheroesService = (function () {
    function SuperheroesService(http) {
        this.http = http;
    }
    SuperheroesService.prototype.getAll = function () {
        return this.http.get(url)
            .delay(25000)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJoZXJvZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cGVyaGVyb2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFHckMsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUkvQixJQUFNLEdBQUcsR0FBRyx1Q0FBdUMsQ0FBQztBQUdwRCxJQUFhLGtCQUFrQjtJQUczQiw0QkFDWSxJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNsQixDQUFDO0lBRUUsbUNBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQWlCLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUtTLFdBQUk7R0FKYixrQkFBa0IsQ0FZOUI7QUFaWSxnREFBa0I7QUFjL0IsdUJBQXVCO0FBQ3ZCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsNEdBQTRHO0FBQzVHLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGtIQUFrSDtBQUNsSCxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiwySEFBMkg7QUFDM0gsaUJBQWlCO0FBQ2pCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5cbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RlbGF5XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgU3VwZXJoZXJvIH0gZnJvbSBcIi4vc3VwZXJoZXJvLm1vZGVsXCI7XG5cbmNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9zdXBlcmhlcm9lc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VwZXJoZXJvZXNTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3VwZXJoZXJvZXM6IFN1cGVyaGVyb1tdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICApIHsgfVxuXG4gICAgcHVibGljIGdldEFsbCgpOiBPYnNlcnZhYmxlPFN1cGVyaGVyb1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcbiAgICAgICAgICAgIC5kZWxheSgyNTAwMClcbiAgICAgICAgICAgIC5tYXAoKHJlc3ApID0+IHJlc3AuanNvbigpIGFzIFN1cGVyaGVyb1tdKTtcbiAgICB9XG59XG5cbi8vIHRoaXMuc3VwZXJoZXJvZXMgPSBbXG4vLyAgICAgICAgICAgICBuZXcgU3VwZXJoZXJvKFxuLy8gICAgICAgICAgICAgICAgIFwiQmF0bWFuXCIsXG4vLyAgICAgICAgICAgICAgICAgXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC9hZS8wMy8xOC9hZTAzMTgxMjBlOGNmNDE1ODcwNTE0NGUyYjdmZTgyNC5qcGdcIlxuLy8gICAgICAgICAgICAgKSxcbi8vICAgICAgICAgICAgIG5ldyBTdXBlcmhlcm8oXG4vLyAgICAgICAgICAgICAgICAgXCJTdXBlcmdpcmxcIixcbi8vICAgICAgICAgICAgICAgICBcImh0dHA6Ly9jZG4yLXd3dy5zdXBlcmhlcm9oeXBlLmNvbS9hc3NldHMvdXBsb2Fkcy9nYWxsZXJ5L3N1cGVyZ2lybC0xeDA0LTUvMTA3MDIyX3diXzA2NTRiLmpwZ1wiXG4vLyAgICAgICAgICAgICApLFxuLy8gICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcbi8vICAgICAgICAgICAgICAgICBcIlRoZSBGbGFzaFwiLFxuLy8gICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cudGVjaG5vYnVmZmFsby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvZmxhc2gtbW92aWUtZGlyZWN0b3Itd3JpdGVyLWdyYWhhbWUtc21pdGguanBnXCJcbi8vICAgICAgICAgICAgICksXG4vLyAgICAgICAgIF07XG4iXX0=