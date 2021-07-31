 window.addEventListener('load',
                         function() {
                             document.getElementById("button").addEventListener("click", click);
                             let theme = localStorage.getItem("theme");
                             
                             if(theme === "dark") {
                                 changeToDark();
                                 document.getElementById("button").innerHTML = "Theme Light";
                             }
                        }, false);
 
function click() {
    let theme = localStorage.getItem("theme");
    if(theme === "dark") {
        localStorage.setItem("theme", "light");
        changeToLight();
         
    } else {
        localStorage.setItem("theme", "dark");
        changeToDark();
    }
}

function changeToDark() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.getElementById("button").innerHTML = "Theme Light";
}

function changeToLight() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.getElementById("button").innerHTML = "Theme Dark";
}
