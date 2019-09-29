"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeStamp = void 0;
var timeStamp = {
  full: function full() {
    var today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth(),
        day = today.getDay() < 10 ? "0" + today.getDay() : today.getDay(),
        hour = today.getHours(),
        minute = today.getMinutes(),
        seconds = today.getSeconds(),
        miliseconds = today.getMilliseconds();
    return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(seconds, ":").concat(miliseconds);
  }
};
exports.timeStamp = timeStamp;