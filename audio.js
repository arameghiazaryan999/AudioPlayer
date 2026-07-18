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
        "music/Aram Asatryan - Asem te chasem (Я кайфую от этой песни).mp3",
        "music/Aram Asatryan Draxti Peri.mp3",
        "music/Artash Asatryan - Miami (1).mp3",
        "music/Artsakh Is Armenia  333 (Feat. Lyov).mp3",
        "music/Ashot Hovsepyan Kyanqi Karusel.mp3",
        "music/Inna - Caliente (Extended Version).mp3",    
        "music/Inna Sun is UP.mp3"
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
let currentSong = 0

let song = new Audio()

window.onload = function () {
    playSong()
}


function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play()
}


function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}




console.log(song);

song.addEventListener("timeupdate", function () {

    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 99 + "%"


    convertTime(song.currentTime)
    totalTime(Math.round(song.duration))

    if (song.ended) {
        next()
    }
})



function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent = min + ":" + sec
    
}


function totalTime(seconds) {

        console.log(song.duration);
        let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec


    currentTime[0].textContent += " / " + min + ":" + sec
    
}

function prev() {
    currentSong--
    let play = document.getElementById("play")
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }

    playSong()
    play.src = "images/pause.png"
}


function  next(){
      currentSong++


      let play = document.getElementById("play")
    if (currentSong == data.song.length) {
        currentSong = 0
    }

    playSong()
    play.src = "images/pause.png"

}



function  mute(){
       let mute  = document.getElementById("mute")
       
       if(song.muted ){
                    song.muted = false
                    mute.src = "images/volume.png"
       }else{
                    song.muted  = true
                    mute.src  = "images/volume-mute.png"
       }
       
}


function  decrease(){
    let mute  = document.getElementById("mute")

    song.volume -= 0.2

    if(song.volume <= 0.1){
                mute.src  = "images/volume-mute.png"
    }
}

function increase(){
    let mute  = document.getElementById("mute")

    song.volume += 0.2

    if(song.volume >= 0.2){
        mute.src = "images/volume.png"
    }
}






    