let currentUsers:String[]=["Asif","Rehan","Sajid","Ali","Shahid"];
let newUsers:String[]=["Rashid","REHAN","Saqib","Ali","Shoaib",];

for (let index = 0; index < newUsers.length; index++) {
    
    if (newUsers[index].toUpperCase()===currentUsers[index].toUpperCase()) {
        console.log(`Dear, ${newUsers[index]} User Name Not available, You have to enter new User Name.`);
    }
    else{
        console.log(`Dear, ${newUsers[index]} User Name is available.`);
    }
    
}