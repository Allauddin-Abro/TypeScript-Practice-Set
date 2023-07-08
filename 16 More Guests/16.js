// Guest List, Greeting Message and Dinner Schedule
var guestNames = ["Rehan", "Rizwan", "Raza", "Rumi"];
var greetingMsg = ["Hi!", "Hello!", "Good Morning!", "Hi there!"];
var dinnerSchedule = "Saturday, 09-july-2023 at Jacob lines Complex.";
// Messages to all guests
console.log(greetingMsg[0] + " " + guestNames[0] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[1] + " " + guestNames[1] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[2] + " " + guestNames[2] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[3] + " " + guestNames[3] + " I would Like to Invite your for dinner on " + dinnerSchedule);
// someone can't join dinner
console.log(guestNames[2] + " is out of city so he can't join dinner.");
// replacing the guest
guestNames[2] = "Sohail";
// Re-Messages to all guests
console.log("\n___________________\n");
console.log(greetingMsg[0] + " " + guestNames[0] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[1] + " " + guestNames[1] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[2] + " " + guestNames[2] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[3] + " " + guestNames[3] + " I would Like to Invite your for dinner on " + dinnerSchedule);
// bigger dinner announcement 
console.log("Hi everyone, I just want to share that we have managed a bigger dinner setup just inviting more friends.");
// adding some other frinds to guest list
guestNames.unshift("Asif");
guestNames.splice(2, 0, "Kamran");
guestNames.push("Shoaib");
// Re-Messages to all guests after adding some new guests
console.log("\n___________________\n");
console.log(greetingMsg[0] + " " + guestNames[0] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[1] + " " + guestNames[1] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[2] + " " + guestNames[2] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[3] + " " + guestNames[3] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[0] + " " + guestNames[4] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[1] + " " + guestNames[5] + " I would Like to Invite your for dinner on " + dinnerSchedule);
console.log(greetingMsg[2] + " " + guestNames[6] + " I would Like to Invite your for dinner on " + dinnerSchedule);
