var makeAlbum = function (name, title, tracks) {
    musicAlbum: {
        if (typeof tracks != "undefined") {
            return {
                Artist: name,
                Album: title,
                tracks: tracks
            };
        }
        else {
            return {
                Artist: name,
                Album: title
            };
        }
    }
};
console.log(makeAlbum("Ali Zafar", "Dilbara"));
console.log(makeAlbum("Atif Aslam", "Yaaria"));
console.log(makeAlbum("Rahat Fateh", "Dil lagi"));
console.log(makeAlbum("Abida Perven", "Jhoom", 3));
