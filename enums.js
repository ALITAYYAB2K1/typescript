"use strict";
//enumerate
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["BUSSINESS"] = 3] = "BUSSINESS";
})(SeatChoice || (SeatChoice = {}));
var Aseat = SeatChoice.BUSSINESS;
console.log(Aseat);
