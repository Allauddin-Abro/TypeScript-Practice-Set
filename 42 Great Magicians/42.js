var magicians = ["John", "Ravi", "David"];
var showMagician = function (magArr) {
    for (var _i = 0, magArr_1 = magArr; _i < magArr_1.length; _i++) {
        var item = magArr_1[_i];
        console.log(item);
    }
};
showMagician(magicians);
// Modifies magicians name to add Great
var makeGreat = function () {
    for (var index = 0; index < magicians.length; index++) {
        magicians[index] = "Great " + magicians[index];
    }
};
makeGreat();
showMagician(magicians);
