// about section
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabName, e) {

    for (tablink of tabLinks) {
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab")
    }

    e.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}

// responsiveness (smaller screen)
var sideMenu = document.getElementsByClassName("sidemenu");

function openMenu() {
    sideMenu[0].style.right = "0";
}

function closeMenu() {
    sideMenu[0].style.right = "-200px";
}

// TODO:
// add paralax effect in the main page (use position sticky)
// include any other fun feature in the page

// 9 men morris
// frogger arcade Game
// movie library
// weather application
// lets chat appliication
// run monash

