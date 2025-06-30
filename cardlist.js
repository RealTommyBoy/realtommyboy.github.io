let setlist = document.getElementsByClassName("setlist");
let archetype = document.getElementsByClassName("archetypes");
let singles = document.getElementsByClassName("singles");

let setButton = document.getElementById("setButton");
let archButton = document.getElementById("archButton");
let singleButton = document.getElementById("singleButton");

console.log(singles.length)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!! BEWARE : LAZYDICK CODE AHEAD, VIEWER DISCRESION IS ADVISED !!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function applySetlist() {
    // put the right thing ontop 
    for (let i = 0; i < setlist.length; i++ ) {
        setlist[i].style.zIndex = "2"
    }
    for (let i = 0; i < archetype.length; i++ ) {
        archetype[i].style.zIndex = "0"
    }
    for (let i = 0; i < singles.length; i++ ) {
        singles[i].style.zIndex = "0"
    }
    // make the sets appear and others disappear! 
    for (let i = 0; i < setlist.length; i++ ) {
        setlist[i].style.opacity = "1"
    }
    for (let i = 0; i < archetype.length; i++) {
        archetype[i].style.opacity = "0"
    }
    for (let i = 0; i < singles.length; i++) {
        singles[i].style.opacity = "0"
    }
    // make the right links work 
    for (let i = 0; i < setlist.length; i++) {
        setlist[i].style.pointerEvents = "fill";
    }
    for (let i = 0; i < archetype.length; i++) {
        archetype[i].style.pointerEvents = "none";
    }
    for (let i = 0; i < singles.length; i++) {
        singles[i].style.pointerEvents = "none";
    }
    // apply textshadow to active filter
    setButton.style.textShadow = "pink 0 0 30px";
    archButton.style.textShadow = "pink 0 0 7px";
    singleButton.style.textShadow = "pink 0 0 7px";
    setButton.style.textDecoration = "underline";
    archButton.style.textDecoration = "none";
    singleButton.style.textDecoration = "none";
}


function applyArchetypes() {
    // put the right thing ontop 
    for (let i = 0; i < setlist.length; i++ ) {
        setlist[i].style.zIndex = "0"
    }
    for (let i = 0; i < archetype.length; i++ ) {
        archetype[i].style.zIndex = "2"
    }
    for (let i = 0; i < singles.length; i++ ) {
        singles[i].style.zIndex = "0"
    }
    // make the sets appear and others disappear! 
    for (let i = 0; i < setlist.length; i++ ) {
        setlist[i].style.opacity = "0"
    }
    for (let i = 0; i < archetype.length; i++) {
        archetype[i].style.opacity = "2"
    }
    for (let i = 0; i < singles.length; i++) {
        singles[i].style.opacity = "0"
    }
    // make the right links work 
    for (let i = 0; i < setlist.length; i++) {
        setlist[i].style.pointerEvents = "none";
    }
    for (let i = 0; i < archetype.length; i++) {
        archetype[i].style.pointerEvents = "fill";
    }
    for (let i = 0; i < singles.length; i++) {
        singles[i].style.pointerEvents = "none";
    }
    // apply textshadow to active filter
    setButton.style.textShadow = "pink 0 0 7px";
    archButton.style.textShadow = "pink 0 0 30px";
    singleButton.style.textShadow = "pink 0 0 7px";
    setButton.style.textDecoration = "none";
    archButton.style.textDecoration = "underline";
    singleButton.style.textDecoration = "none";
}

function applySingles() {
    // put the right thing ontop 
    for (let i = 0; i < setlist.length; i++ ) {
        setlist[i].style.zIndex = "0"
    }
    for (let i = 0; i < archetype.length; i++ ) {
        archetype[i].style.zIndex = "0"
    }
    for (let i = 0; i < singles.length; i++ ) {
        singles[i].style.zIndex = "2"
    }
    // make the sets appear and others disappear! 
    for (let i = 0; i < setlist.length; i++ ) {
        setlist[i].style.opacity = "0"
    }
    for (let i = 0; i < archetype.length; i++) {
        archetype[i].style.opacity = "0"
    }
    for (let i = 0; i < singles.length; i++) {
        singles[i].style.opacity = "1"
    }
    // make the right links work 
    for (let i = 0; i < setlist.length; i++) {
        setlist[i].style.pointerEvents = "none";
    }
    for (let i = 0; i < archetype.length; i++) {
        archetype[i].style.pointerEvents = "none";
    }
    for (let i = 0; i < singles.length; i++) {
        singles[i].style.pointerEvents = "fill";
    }
    // apply styling to active filter's button
    setButton.style.textShadow = "pink 0 0 7px";
    archButton.style.textShadow = "pink 0 0 7px";
    singleButton.style.textShadow = "pink 0 0 30px";
    setButton.style.textDecoration = "none";
    archButton.style.textDecoration = "none";
    singleButton.style.textDecoration = "underline";
}

// when page opens, apply set list 
applySetlist()