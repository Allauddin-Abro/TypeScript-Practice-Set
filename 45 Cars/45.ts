interface car{
    manufecturer:string,
    model:string,
    moreInfo:string
}
const carInfo=(manf:string, model:string, ...moreInfo:string[])=>{
    car:{
        return{
            manufecturer:manf,
            model:model,
            moreInfo:moreInfo
        }
    }
}
let carObj:{}=carInfo("Honda","Civic","White","1799 CC");
console.log(carObj);