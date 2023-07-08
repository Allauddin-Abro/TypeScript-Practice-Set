// Guest List, Greeting Message and Dinner Schedule
let guestNames:string[]=["Rehan","Rizwan","Raza","Rumi"];
let greetingMsg:string[]=["Hi!","Hello!","Good Morning!","Hi there!"];
let dinnerSchedule:string="Saturday, 09-july-2023 at Jacob lines Complex."

// Messages to all guests
console.log(greetingMsg[0]+" "+guestNames[0]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[1]+" "+guestNames[1]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[2]+" "+guestNames[2]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[3]+" "+guestNames[3]+" I would Like to Invite your for dinner on "+dinnerSchedule);

// someone can't join dinner
console.log(guestNames[2]+" is out of city so he can't join dinner.");

// replacing the guest
guestNames[2]="Sohail";

// Re-Messages to all guests
console.log("\n___________________\n")
console.log(greetingMsg[0]+" "+guestNames[0]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[1]+" "+guestNames[1]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[2]+" "+guestNames[2]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[3]+" "+guestNames[3]+" I would Like to Invite your for dinner on "+dinnerSchedule);

// bigger dinner announcement 
console.log("Hi everyone, I just want to share that we have managed a bigger dinner table just inviting more friends.");

// adding some other frinds to guest list
guestNames.unshift("Asif");
guestNames.splice(2,0,"Kamran");
guestNames.push("Shoaib");

// Re-Messages to all guests after adding some new guests
console.log("\n___________________\n")
console.log(greetingMsg[0]+" "+guestNames[0]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[1]+" "+guestNames[1]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[2]+" "+guestNames[2]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[3]+" "+guestNames[3]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[0]+" "+guestNames[4]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[1]+" "+guestNames[5]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[2]+" "+guestNames[6]+" I would Like to Invite your for dinner on "+dinnerSchedule);



// bigger Table won't arrive in time annoucement 
console.log("Hello everyone, Sorry to say that our bigger dinner table won't arrive in time so therfore i can manage only two guets for dinner.");

// removing guests from list
console.log("\n___________________\n")
console.log("Sorry! "+guestNames.pop()+" I can’t invite you to dinner.");
console.log("Sorry! "+guestNames.pop()+" I can’t invite you to dinner.");
console.log("Sorry! "+guestNames.pop()+" I can’t invite you to dinner.");
console.log("Sorry! "+guestNames.pop()+" I can’t invite you to dinner.");
console.log("Sorry! "+guestNames.pop()+" I can’t invite you to dinner.");


// Re-Messages to remaining two guests after removing others
console.log("\n___________________\n")
console.log(greetingMsg[0]+" "+guestNames[0]+" I am happy to inform you that you are Invited for dinner on "+dinnerSchedule);
console.log(greetingMsg[1]+" "+guestNames[1]+" I am happy to inform you that you are Invited for dinner on "+dinnerSchedule);


// Removing last two guests
guestNames.pop();
guestNames.pop();

// printing the empty list
console.log("\n___________________\n")
console.log(guestNames);