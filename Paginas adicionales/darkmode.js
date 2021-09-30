////////////////////////////////////////////////////////////////////
/////////////////////////// DARKMODE ///////////////////////////////
////////////////////////////////////////////////////////////////////

$("#theme").on("click", () => {
    if (localStorage.getItem("theme") == "dark") {
        lightMode()
    } else {
        darkMode()
    }
})

const darkMode = () => {

    $("body").removeClass("bg-light").addClass("bg-dark")
    $("footer").addClass("bg-dark")
    $("section").removeClass("bg-light").addClass("bg-dark")
    $("article").removeClass("bg-light").addClass("bg-dark")
    $("main").css("background-color", "darkslategrey")
    $("ul").css("color", "white")
    $("p").css("color", "white")
    $(".enviosHeader").css("color", "white")


    localStorage.setItem("theme", "dark")
}

const lightMode = () => {

    $("body").removeClass("bg-dark").addClass("bg-light")
    $("footer").removeClass("bg-dark").addClass("bg-light")
    $("section").removeClass("bg-dark").addClass("bg-light")
    $("article").removeClass("bg-dark").addClass("bg-light")
    $("main").css("background-color", "white")
    $("ul").css("color", "black")
    $("p").css("color", "black")
    $(".enviosHeader").css("color", "black")


    localStorage.setItem("theme", "light")
}