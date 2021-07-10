const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
});

//project 1
const video1 = document.querySelector("#video-1");
const btn1 = document.querySelector("#buttons-1 i");
const bar1 = document.querySelector("#video-bar-1");

const playPause1 = () => {
    if (video1.paused) {
        video1.play();
        btn1.className = "far fa-pause-circle";
        video1.style.opacity = ".7";
    }
    else {
        video1.pause();
        btn1.className = "far fa-play-circle";
        video1.style.opacity = ".3";
    }

}

btn1.addEventListener("click", () => {
    playPause1();
});

video1.addEventListener("timeupdate", () => {
    const barWidth1 = video1.currentTime / video1.duration;
    bar1.style.width = `${barWidth1 * 100}%`;

    if (video1.ended) {
        btn1.className = "far fa-play-circle";
        video1.style.opacity = ".3";
    }
})

//project 2
const video2 = document.querySelector("#video-2");
const btn2 = document.querySelector("#buttons-2 i");
const bar2 = document.querySelector("#video-bar-2");

const playPause2 = () => {
    if (video2.paused) {
        video2.play();
        btn2.className = "far fa-pause-circle";
        video2.style.opacity = ".7";
    }
    else {
        video2.pause();
        btn2.className = "far fa-play-circle";
        video2.style.opacity = ".3";
    }

}

btn2.addEventListener("click", () => {
    playPause2();
});

video2.addEventListener("timeupdate", () => {
    const barWidth2 = video2.currentTime / video2.duration;
    bar2.style.width = `${barWidth2 * 100}%`;

    if (video2.ended) {
        btn2.className = "far fa-play-circle";
        video2.style.opacity = ".3";
    }
})

//project 3
const video3 = document.querySelector("#video-3");
const btn3 = document.querySelector("#buttons-3 i");
const bar3 = document.querySelector("#video-bar-3");

const playPause3 = () => {
    if (video3.paused) {
        video3.play();
        btn3.className = "far fa-pause-circle";
        video3.style.opacity = ".7";
    }
    else {
        video3.pause();
        btn3.className = "far fa-play-circle";
        video3.style.opacity = ".3";
    }

}

btn3.addEventListener("click", () => {
    playPause3();
});

video3.addEventListener("timeupdate", () => {
    const barWidth3 = video3.currentTime / video3.duration;
    bar3.style.width = `${barWidth3 * 100}%`;

    if (video3.ended) {
        btn3.className = "far fa-play-circle";
        video3.style.opacity = ".3";
    }
})

//project 4
const video4 = document.querySelector("#video-4");
const btn4 = document.querySelector("#buttons-4 i");
const bar4 = document.querySelector("#video-bar-4");

const playPause4 = () => {
    if (video4.paused) {
        video4.play();
        btn4.className = "far fa-pause-circle";
        video4.style.opacity = ".7";
    }
    else {
        video4.pause();
        btn4.className = "far fa-play-circle";
        video4.style.opacity = ".3";
    }

}

btn4.addEventListener("click", () => {
    playPause4();
});

video4.addEventListener("timeupdate", () => {
    const barWidth4 = video4.currentTime / video4.duration;
    bar4.style.width = `${barWidth4 * 100}%`;

    if (video4.ended) {
        btn4.className = "far fa-play-circle";
        video4.style.opacity = ".3";
    }
})

//project 5
const video5 = document.querySelector("#video-5");
const btn5 = document.querySelector("#buttons-5 i");
const bar5 = document.querySelector("#video-bar-5");

const playPause5 = () => {
    if (video5.paused) {
        video5.play();
        btn5.className = "far fa-pause-circle";
        video5.style.opacity = ".7";
    }
    else {
        video5.pause();
        btn5.className = "far fa-play-circle";
        video5.style.opacity = ".3";
    }

}

btn5.addEventListener("click", () => {
    playPause5();
});

video5.addEventListener("timeupdate", () => {
    const barWidth5 = video5.currentTime / video5.duration;
    bar5.style.width = `${barWidth5 * 100}%`;

    if (video5.ended) {
        btn5.className = "far fa-play-circle";
        video5.style.opacity = ".3";
    }
})