// Make Shirt
var makeShirt = function (size, msg) {
    if (size === void 0) { size = "large"; }
    console.log("Size of Shirt is \"".concat(size, "\" with Message Printed on shirt as \"").concat(msg, "\""));
};
// Calling Shirt Functions
makeShirt("Large", "I Love TypeScript");
makeShirt("Medium", "I Love TypeScript");
makeShirt("XL", "TypeScript is Superset of JavaScript");
