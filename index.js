// about section
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabName, e){

    for(tablink of tabLinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab")
    }

    e.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}