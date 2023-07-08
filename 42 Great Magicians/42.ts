let magicians:string[]=["John","Ravi","David"];
const showMagician=(magArr:string[])=>{

    for (const item of magArr) {
        console.log(item);
    }
}

showMagician(magicians);


// Modifies magicians name to add Great
const makeGreat=()=>{

    for (let index = 0; index < magicians.length; index++) {
        
        magicians[index]="Great "+magicians[index];
    }
}

makeGreat();
showMagician(magicians);