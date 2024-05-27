

/*
function search(){
    let artist = document.getElementById("searchField").value
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
.then(response =>{
    return response.json()
})
.then(obj =>{
   // console.log(obj["data"])
    obj["data"].forEach(element => {
       // console.log(element)
       document.getElementById("searchResults").style.display = "block"
       let a = document.querySelector("#b")
       a.innerHTML += element.title
    });
})
}*/

function search() {
    let artist = document.getElementById("searchField").value
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
        .then(response => {
            return response.json()
        })
        .then(obj => {
            // console.log(obj["data"])
            let a = document.querySelector("#b");
            a.innerHTML = "";
            obj["data"].forEach(element => {
                // console.log(element)
                document.getElementById("nomeArtista").classList.remove("d-none");
                document.getElementById("nomeArtista").classList.add("d-block");
                document.getElementById("searchResults").classList.add("d-block");
                document.getElementById("eminem").classList.add("d-none");
                document.getElementById("metallica").classList.add("d-none");
                document.getElementById("queen").classList.add("d-none");


                //TRASFORMAZIONE DA SECONDI IN MINUTI
                let b = Math.floor(element.duration / 60);
                // IL RESTO DELL'OPERAZIONE SONO I SECONDI RESTANTI
                let c = element.duration % 60;

                a.innerHTML +=

                    "<div class='card card-a'>" +
                    "<img src='" + element.album.cover_big + "' class='card-img-top' style='margin: auto;'>" +
                    "<a href='" + element.link + "'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + element.title + "</h5>" +
                    "<p class='card-subtitle mb-2 text-muted'>" + element.artist.name + "</p>" +
                    // PER I SECONDI MINORI DI 10
                    "<p style='color: black;'>Duration: " + b + "m " + (c < 10 ? '0' : '') + c + "s</p>" +
                    "</a>" +
                    "</div>" +
                    "</div>";
                //console.log(a)
            });
        })
}


window.onload = function () {
    searchEminem();
    searchMetallica();
    searchQueen();
}

function searchEminem() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then(response => {
            return response.json()
        })
        .then(obj => {
            // console.log(obj["data"])
            let a = document.querySelector("#eminemSection");
            a.innerHTML = "";
            obj["data"].forEach(element => {
                // console.log(element)

                //TRASFORMAZIONE DA SECONDI IN MINUTI
                let b = Math.floor(element.duration / 60);
                // IL RESTO DELL'OPERAZIONE SONO I SECONDI RESTANTI
                let c = element.duration % 60;

                a.innerHTML +=

                    "<div class='card card-a'>" +
                    "<img src='" + element.album.cover_big + "' class='card-img-top' style='margin: auto;'>" +
                    "<a href='" + element.link + "'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + element.title + "</h5>" +
                    "<p class='card-subtitle mb-2 text-muted'>" + element.artist.name + "</p>" +
                    // PER I SECONDI MINORI DI 10
                    "<p style='color: black;'>Duration: " + b + "m " + (c < 10 ? '0' : '') + c + "s</p>" +
                    "</a>" +
                    "</div>" +
                    "</div>";
                //console.log(a)
            });
            

        })
}

function searchMetallica() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
        .then(response => {
            return response.json()
        })
        .then(obj => {
            // console.log(obj["data"])
            let a = document.querySelector("#metallicaSection");
            a.innerHTML = "";
            obj["data"].forEach(element => {
                // console.log(element)

                //TRASFORMAZIONE DA SECONDI IN MINUTI
                let b = Math.floor(element.duration / 60);
                // IL RESTO DELL'OPERAZIONE SONO I SECONDI RESTANTI
                let c = element.duration % 60;

                a.innerHTML +=

                    "<div class='card card-a'>" +
                    "<img src='" + element.album.cover_big + "' class='card-img-top' style='margin: auto;'>" +
                    "<a href='" + element.link + "'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + element.title + "</h5>" +
                    "<p class='card-subtitle mb-2 text-muted'>" + element.artist.name + "</p>" +
                    // PER I SECONDI MINORI DI 10
                    "<p style='color: black;'>Duration: " + b + "m " + (c < 10 ? '0' : '') + c + "s</p>" +
                    "</a>" +
                    "</div>" +
                    "</div>";
                //console.log(a)
            });
        })
}

function searchQueen() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
        .then(response => {
            return response.json()
        })
        .then(obj => {
            // console.log(obj["data"])
            let a = document.querySelector("#queenSection");
            a.innerHTML = "";
            obj["data"].forEach(element => {
                // console.log(element)

                //TRASFORMAZIONE DA SECONDI IN MINUTI
                let b = Math.floor(element.duration / 60);
                // IL RESTO DELL'OPERAZIONE SONO I SECONDI RESTANTI
                let c = element.duration % 60;

                a.innerHTML +=

                    "<div class='card card-a'>" +
                    "<img src='" + element.album.cover_big + "' class='card-img-top' style='margin: auto;'>" +
                    "<a href='" + element.link + "'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + element.title + "</h5>" +
                    "<p class='card-subtitle mb-2 text-muted'>" + element.artist.name + "</p>" +
                    // PER I SECONDI MINORI DI 10
                    "<p style='color: black;'>Duration: " + b + "m " + (c < 10 ? '0' : '') + c + "s</p>" +
                    "</a>" +
                    "</div>" +
                    "</div>";
                //console.log(a)
            });
        })
}