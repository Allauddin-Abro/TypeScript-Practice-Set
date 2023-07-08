const sandwich=(sandwichItems:string[])=>{

for (const items of sandwichItems) {
  
    console.log(`User wants the ${items} Sandwich.`);
}

}


sandwich(["Chicken"]);
sandwich(["Egg","Grilled Chicken"]);
sandwich(["Chicken","Grilled Chees","Ice Cream"]);

