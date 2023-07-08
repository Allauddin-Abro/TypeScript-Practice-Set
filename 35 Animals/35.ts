let favAnimals:String[]=["cow","horse","sheep"];


for (const item of favAnimals) {
        console.log(item);
}

for (const item of favAnimals) {

    if(item=="cow"){
        console.log(item+" is a halal Animal.");
    }

    else if(item=="horse"){
        console.log(item+" is use for riding.");
    }

    else if(item=="sheep"){
        console.log(item+" hairs are used to make winter wearings.");
    }


}

console.log("All these animals are domestic.")