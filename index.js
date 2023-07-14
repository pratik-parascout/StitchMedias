const navToggle = document.querySelector(".toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // }
    // else{
    //     links.classList.add("show-links");
    // }

    links.classList.toggle("show-links");

    // classList --> Shows/gets all the classes
    // contains --> checks classlist for specific class
    // add --> add class
    // remove --> remove class
    // toggle --> toggles class
});