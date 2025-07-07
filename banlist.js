// sort out the negates 
let forbiddenList = document.getElementById("forbidden").children;
let banlistElements = document.querySelectorAll("#forbidden > tbody > tr");
let button = document.getElementById("button")
let filterSwitch = false



console.log(forbiddenList)

console.log(banlistElements.length)

button.addEventListener("click", function() {
    switch (filterSwitch) {
        case false:
            button.textContent = "Undo Filters";
            filterOut("Negate");
            filterOut("Floodgate");
            filterOut("Blowout");
            filterSwitch = true;
            break;
        case true:
            button.textContent = "Filter out Negates, Floodgates and Blowouts";
            filterReset();
            filterSwitch = false;
    }
})

function filterOut(value) {
    for (i = 0; i < banlistElements.length; i++) {
        if (banlistElements[i].children[4].textContent == value) {
            console.log("heartbeat")
            banlistElements[i].remove()
        }
    }
}

function filterReset() {
    // empty the entire set 
    for (i = 0; i < banlistElements.length; i++) {
        banlistElements[i].remove()
    }
    for (i = 0; i < banlistElements.length; i++) {
        verifyCardType(banlistElements[i].children[0].textContent).append(banlistElements[i])
    }
}

function verifyCardType(type) {
    switch (type) {
        case "Monster/Effect":
            console.log("effect monster")
            return forbiddenList[1];
        case "Monster/Ritual":
            console.log("ritual monster")
            return forbiddenList[2];
        case "Monster/Fusion":
            console.log("fusion monster")
            return forbiddenList[3];
        case "Monster/Link":
            console.log("link monster");
            return forbiddenList[4];
        case "Monster/Synchro":
            console.log("synchro monster");
            return forbiddenList[5];
        case "Monster/Xyz":
            console.log("xyz monster");
            return forbiddenList[6];
        case "Spell":
            console.log("spell");
            return forbiddenList[7];
        case "Trap":
            console.log("trap");
            return forbiddenList[8];
    }
}


