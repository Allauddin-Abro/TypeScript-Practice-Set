var sandwich = function (sandwichItems) {
    for (var _i = 0, sandwichItems_1 = sandwichItems; _i < sandwichItems_1.length; _i++) {
        var items = sandwichItems_1[_i];
        console.log("User wants the ".concat(items, " Sandwich."));
    }
};
sandwich(["Chicken"]);
sandwich(["Egg", "Grilled Chicken"]);
sandwich(["Chicken", "Grilled Chees", "Ice Cream"]);
