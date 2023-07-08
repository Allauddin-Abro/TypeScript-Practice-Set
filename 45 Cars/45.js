var carInfo = function (manf, model) {
    var moreInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moreInfo[_i - 2] = arguments[_i];
    }
    car: {
        return {
            manufecturer: manf,
            model: model,
            moreInfo: moreInfo
        };
    }
};
var obj = carInfo("Honda", "Civic", "White", "1799 CC");
console.log(obj);
// console.log(carInfo("Honda","Civic","White","1799 CC"));
