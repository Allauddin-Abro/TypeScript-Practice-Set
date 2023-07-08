var currentUsers = ["Asif", "Rehan", "Sajid", "Ali", "Shahid"];
var newUsers = ["Rashid", "REHAN", "Saqib", "Ali", "Shoaib",];
for (var index = 0; index < newUsers.length; index++) {
    if (newUsers[index].toUpperCase() === currentUsers[index].toUpperCase()) {
        console.log("Dear, ".concat(newUsers[index], " User Name Not available, You have to enter new User Name."));
    }
    else {
        console.log("Dear, ".concat(newUsers[index], " User Name is available."));
    }
}
