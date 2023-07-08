var magicians = ["John", "Ravi", "David"];
var showMagician = function (magArr) {
    for (var _i = 0, magArr_1 = magArr; _i < magArr_1.length; _i++) {
        var item = magArr_1[_i];
        console.log(item);
    }
};
// showMagician(magicians);
// Modifies magicians name to add Great
var makeGreat = function (magarr) {
    var copymagicians = magarr.slice();
    for (var index = 0; index < copymagicians.length; index++) {
        copymagicians[index] = "Great " + copymagicians[index];
    }
    return copymagicians;
};
var arr = makeGreat(magicians);
showMagician(arr);
showMagician(magicians);
