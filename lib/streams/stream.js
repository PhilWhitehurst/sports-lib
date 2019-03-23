"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../events/utilities/helpers");
var Stream = /** @class */ (function () {
    function Stream(type, data) {
        this.data = [];
        this.type = type;
        if (data) {
            this.data = data;
        }
    }
    Stream.prototype.getNumericData = function () {
        return this.data.filter(function (data) { return helpers_1.isNumber(data); });
    };
    Stream.prototype.getStreamDataByTime = function (startDate) {
        return this.data.reduce(function (accu, dataItem, index) {
            accu.push({
                time: startDate.getTime() + index * 1000,
                value: dataItem,
            });
            return accu;
        }, []);
    };
    Stream.prototype.getStreamDataByDuration = function (offset) {
        return this.data.reduce(function (accu, dataItem, index) {
            accu.push({
                time: index * 1000 + (offset || 0),
                value: dataItem,
            });
            return accu;
        }, []);
    };
    Stream.prototype.toJSON = function () {
        return {
            type: this.type,
            data: this.data,
        };
    };
    return Stream;
}());
exports.Stream = Stream;