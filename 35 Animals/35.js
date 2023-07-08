var favAnimals = ["cow", "horse", "sheep"];
for (var _i = 0, favAnimals_1 = favAnimals; _i < favAnimals_1.length; _i++) {
    var item = favAnimals_1[_i];
    console.log(item);
}
for (var _a = 0, favAnimals_2 = favAnimals; _a < favAnimals_2.length; _a++) {
    var item = favAnimals_2[_a];
    if (item == "cow") {
        console.log(item + " is a halal Animal.");
    }
    else if (item == "horse") {
        console.log(item + " is use for riding.");
    }
    else if (item == "sheep") {
        console.log(item + " hairs are used to make winter wearings.");
    }
}
console.log("All these animals are domestic.");
