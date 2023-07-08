let magicians:string[]=["John","Ravi","David"];
const showMagician=(magArr:string[])=>{

    for (const item of magArr) {
        console.log(item);
    }
}

// showMagician(magicians);


// Modifies magicians name to add Great
const makeGreat=(magarr:string[])=>{

let copymagicians:string[]=magarr.slice();    
    for (let index = 0; index < copymagicians.length; index++) {        
     copymagicians[index]="Great "+copymagicians[index];
    }

    return copymagicians;
}


let changedMag:string[]=makeGreat(magicians);
// // Showing chnaged Magician Names
showMagician(changedMag);
// Showing Original Magician Names
showMagician(magicians);
