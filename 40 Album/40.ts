interface musicAlbum{
    Artist:string;
    Album:string;
    tracks:number;
}

const makeAlbum=(name:string, title:string, tracks?:number)=>{
    musicAlbum:{

        if(typeof tracks!="undefined"){
        return{
        Artist:name,
        Album:title,
        tracks:tracks
        }
    }
    else{
        return{
            Artist:name,
            Album:title
    }
    }
}
}

// calling with artist and title
console.log(makeAlbum("Ali Zafar","Dilbara"));
console.log(makeAlbum("Atif Aslam","Yaaria"));
console.log(makeAlbum("Rahat Fateh","Dil lagi"));

// calling with tracks
console.log(makeAlbum("Abida Perven","Jhoom",3));

