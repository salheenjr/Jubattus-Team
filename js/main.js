let actBtn = document.querySelector(".header .links .activity");
let teamBtn = document.querySelector(".header .links .team");
let eventsBtn = document.querySelector(".header .links .events");
let contactBtn = document.querySelector(".header .links .contact");
// Start Sections
let actSection = document.querySelector("div.activity");
let teamSection = document.querySelector("div.team");
let eventsSection = document.querySelector("div.events");
let contactSection = document.querySelector("div.contact");
let nameTeamSection = document.querySelector("div.team-name");
// Button Scroll To Top
let toTop = document.querySelector("i.toTop");
// Logo 
let logo = document.querySelector(".header a.logo");

actBtn.onclick = function () {
    window.scrollTo({top: actSection.offsetTop})
}
teamBtn.onclick = function () {
    window.scrollTo({top: teamSection.offsetTop})
}
eventsBtn.onclick = function () {
    window.scrollTo({top: eventsSection.offsetTop})
}
contactBtn.onclick = function () {
    window.scrollTo({top: contactSection.offsetTop})
}
logo.onclick = function () {
    window.scrollTo({top: nameTeamSection.offsetTop})
}


window.onscroll = function () {
    if (window.scrollY > 600) {
        toTop.style.bottom = "50px";
    } else {
        toTop.style.bottom = "-40px";
    }
}

toTop.onclick = function () {
    window.scrollTo({top: 0});
}
