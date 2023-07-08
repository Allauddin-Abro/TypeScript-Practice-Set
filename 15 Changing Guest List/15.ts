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
console.log(greetingMsg[0]+" "+guestNames[0]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[1]+" "+guestNames[1]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[2]+" "+guestNames[2]+" I would Like to Invite your for dinner on "+dinnerSchedule);
console.log(greetingMsg[3]+" "+guestNames[3]+" I would Like to Invite your for dinner on "+dinnerSchedule);
