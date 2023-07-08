let userNames:String[]=["Asif","Rehan","Sajid","Admin","Shahid","Ghani"];
let greetingMSg:String="Welcom to DashBoard!";

for (let index = 0; index < userNames.length; index++) {

    if(userNames[index]=="Admin"){
        console.log("Hello Admin, would you like to se status report?");
    }

    else{
    console.log("Hello "+userNames[index]+", "+greetingMSg);
    }
}
