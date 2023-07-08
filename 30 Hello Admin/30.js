var userNames = ["Asif", "Rehan", "Sajid", "Admin", "Shahid", "Ghani"];
var greetingMSg = "Welcom to DashBoard!";
for (var index = 0; index < userNames.length; index++) {
    if (userNames[index] == "Admin") {
        console.log("Hello Admin, would you like to se status report?");
    }
    else {
        console.log("Hello " + userNames[index] + ", " + greetingMSg);
    }
}
