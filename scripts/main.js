let orderButton = document.getElementById("orderButton");

let oneTimeOptionCheckbox = document.getElementById("oneTime");
let subscribeOptionCheckbox = document.getElementById("subscribe");
let subscribeOptionDescription = document.getElementById("seconCheckboc-description");
let subscribeOptionBlock = document.getElementById("secondCheckbox");

let subscribeBlock = document.getElementById("subscribeBlock");
let oneTimeBlock = document.getElementById("oneTimeBlock");


let macronutreins = document.getElementById("Macronutreins");
let macronutreinsHr = macronutreins.querySelector("hr");
let macronutreinsTable = document.querySelector(".macronutreins-table");

let vitamins = document.getElementById("Vitamins");
let vitaminsHr = vitamins.querySelector("hr");
let vitaminsTable = document.querySelector(".vitamins-table");

let minerals = document.getElementById("Minerals");
let mineralsHr = minerals.querySelector("hr");
let mineralTable = document.querySelector(".minerals-table");

//on button click return to the top of the page
orderButton.addEventListener("click", () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})


//toggle between checkboxes and their options

oneTimeOptionCheckbox.addEventListener("click", function () {
    if (this.checked === true) {
        subscribeOptionCheckbox.checked = false;
        subscribeBlock.style.display = "none";
        oneTimeBlock.style.display = "flex";
    } else if (this.checked === false) {
        subscribeOptionCheckbox.checked = true;
        subscribeBlock.style.display = "flex";
        oneTimeBlock.style.display = "none";
    }
})
subscribeOptionCheckbox.addEventListener("click", function () {
    if (this.checked === true) {
        oneTimeOptionCheckbox.checked = false;
        oneTimeBlock.style.display = "none";
        subscribeBlock.style.display = "flex";
        subscribeOptionDescription.style.display = "block";
    } else if (this.checked === false) {
        oneTimeOptionCheckbox.checked = true;
        oneTimeBlock.style.display = "flex";
        subscribeBlock.style.display = "none";
        subscribeOptionDescription.style.display = "none";
    }
})


//on mous over/out show or hide the subscribe option 

subscribeOptionBlock.addEventListener("mouseover", () => {
    if (subscribeOptionCheckbox.checked === true) {
        subscribeOptionDescription.style.display = "block";
    }
})
subscribeOptionBlock.addEventListener("mouseout", () => {
    if (subscribeOptionCheckbox.checked === true) {
        subscribeOptionDescription.style.display = "none";
    }
})



//toggle between categories and show their informations table

macronutreins.addEventListener("click", function () {
    macronutreins.classList.add("active-category");
    macronutreinsHr.classList.add("active-category-hr");
    macronutreinsTable.style.display = "table";

    vitamins.classList.remove("active-category");
    vitaminsHr.classList.remove("active-category-hr");
    vitaminsTable.style.display = "none";

    minerals.classList.remove("active-category");
    mineralsHr.classList.remove("active-category-hr");
    mineralTable.style.display = "none";
})

vitamins.addEventListener("click", function () {
    vitamins.classList.add("active-category");
    vitaminsHr.classList.add("active-category-hr");
    vitaminsTable.style.display = "table";

    macronutreins.classList.remove("active-category");
    macronutreinsHr.classList.remove("active-category-hr");
    macronutreinsTable.style.display = "none";

    minerals.classList.remove("active-category");
    mineralsHr.classList.remove("active-category-hr");
    mineralTable.style.display = "none";
})

minerals.addEventListener("click", function () {
    minerals.classList.add("active-category");
    mineralsHr.classList.add("active-category-hr");
    mineralTable.style.display = "table";

    macronutreins.classList.remove("active-category");
    macronutreinsHr.classList.remove("active-category-hr");
    macronutreinsTable.style.display = "none";

    vitamins.classList.remove("active-category");
    vitaminsHr.classList.remove("active-category-hr");
    vitaminsTable.style.display = "none";
})