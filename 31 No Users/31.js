var userNames = ["Asif", "Rehan", "Sajid", "Admin", "Shahid", "Ghani"];
if (!userNames) {
    console.log("We need to find some users!");
}
for (var index = 0; index <= 5; index++) {
    userNames.pop();
}
if (userNames[0] == undefined) {
    console.log("We need to find some users!");
}
