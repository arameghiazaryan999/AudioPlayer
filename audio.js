let data = {
    title :[
        "Aram Asatryan Asemm Te Chasem",
        "Aram Asatryan Draxti Partez",
        "Artash Asatryan Miami",
        "Lyov 333 Feat",
        "Ashot Hovsepyan Kyanqi Karusel",
        "Inna Hot",    
        "Inna Sun is UP",
        "SlaVVo Ay Leto Leto",
        "Tatul Avoyan Ampern elan qula qula",

    ],
    song : [
        "music/Aram Asatryan Asemm Te Chasem.mp3",
        "music/Aram Asatryan Draxti Partez.mp3",
        "music/Artash Asatryan Miami.mp3",
        "music/Lyov 333 Feat.mp3",
        "music/Ashot Hovsepyan Kyanqi Karusel.mp3",
        "music/Inna Hot.mp3",    
        "music/Inna Sun is UP.mp3",
        "music/SlaVVo Ay Leto Leto.mp3",
        "music/Tatul Avoyan Ampern elan qula qula.mp3",

    ],

    poster :[
          "https://64.media.tumblr.com/c80cc57fe20c6b1d8810fb8fb10a52e2/tumblr_n0fwemRUKU1trsyieo1_500.gifv",
          "https://64.media.tumblr.com/303c713aac924ac147fd047f6cda7931/tumblr_n0dsroizYs1trsyieo1_500.gifv",
          "https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/artist/artash-asatryan-vlrXE",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGJ4djC9rLkRAd5xW6oX-MQF0iSvpA-RVj1z0Am34lw&s=10",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByMTpAoHxis-zBAIDKczoFSuyzuEdvL8w9VdLbyGkpA&s=10",
          "https://i.makeagif.com/media/3-15-2017/zuIlPB.gif",
          "https://media.tenor.com/t35n21GSVPMAAAAM/inna-cola-song.gif",
          "https://i1.sndcdn.com/artworks-000019138751-l4qvmw-t1080x1080.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY8vd6mDX9YIbwJRPg-5uA3aV9BWjBm6XnfrDoumW3b-t1HaDhmN3pJU&s=10",
          "https://i.ytimg.com/vi/nE2b3sJ-Ejo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2ZSpFOh2ov2LxDA40R_2xgfT3hw",
          
          

    ],


   
    


}

let song = new Audio()
let currentSong = 0

window.onload = function (){
    playSong()
}





function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContrnt = data.title[currentSong]
    let img = document.getElementById("row1")
    img.style.backgroundImige = "url(" + data.poster[currentSong] +")"
    
    let main = document.getElementById("main")
    main.style.backgroundImige = "url(" + data.poster[currentSong] +")"
    song.play()

   
}


function playOrPauseSong(){
    let play = document.getElementById("play")

    if(song.paused){

        song.play()
        play.src = "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"


    
    }




}






    