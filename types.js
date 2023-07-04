"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get('https://random-data-api.com/api/stripe/random_stripe?size=5').then(function (res) {
    res.data.forEach(function (element) {
        console.log(element);
    });
    console.log(arrayId(res.data));
});
var arrayId = function (arr) {
    return arr.map(function (element) {
        return (element.id);
    });
};
