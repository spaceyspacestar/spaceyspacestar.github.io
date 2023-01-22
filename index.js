function RedirectUser(index) {
    var audio = new Audio('./assets/sounds/mouse_click.wav');
    audio.play();
    setTimeout(function() {
        window.location.href = index;
    }, 300);

}

//#region Audio stuff
//little script to play a hover sound for """immersion"""
function PlayHoverSound() {
    var audio = new Audio('./assets/sounds/mouse_select.wav');
    audio.play();
}
//I hope nobody spams this
function StartMeowing(){
    var img = document.getElementById("image");
    var audio = document.getElementById("meow");
    img.src="./assets/images/yumemeow.gif";
    audio.play();
    setTimeout(function() {
        img.src = "./assets/images/yumewalk.gif";
    }, 1300);
}

//All this just to play some music
function PlayMusic() {
    const music = document.getElementById("audio");
    var img = document.getElementById("music");
    img.src = "./assets/images/music_on.gif";
    var sound = new Audio('./assets/sounds/play_music.wav');
    sound.play();
    music.play();
}

function PauseMusic() {
    const music = document.getElementById("audio");
    var img = document.getElementById("music");
    img.src = "./assets/images/music_off.gif";
    var sound = new Audio('./assets/sounds/pause_music.wav');
    sound.play();
    music.pause();
}

function CheckMusic() {
    const music = document.getElementById("audio");
    if (music.paused) {
        PlayMusic();
    }
    else{
        PauseMusic();
    }
}
//#endregion