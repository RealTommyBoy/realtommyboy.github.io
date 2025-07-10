// ---------------------------------------------
// ------------------ ARTICLES -----------------
// ---------------------------------------------

// write fill in all news articles down here

// syntax : const pageX = new article(image,header,paragraph,date)

//example :
const page1 = new article(
    "news/Tourney001.webp",
    "First NCC Tourney!",
    "Looking to test your mettle? Want to carve out your piece of NCC history? " +
    "Well you've come to the right place! Go to our Discord Server or click the " +
    "link in the image to your left to put in your availibility for our upcoming " +
    "LIVE tournament bracket!",
    "2025/07/10",
    "https://docs.google.com/forms/d/e/1FAIpQLSdtY-7qNY2S-MhwlVbCXpo7QVHfdBxN68hZv5KYY2NUeDGW4A/viewform?usp=dialog"
)
const page2 = new article(
    "news/BANLIST1_FORBIDDEN1.webp",
    "July 2025 Banlist",
    "At long last our Forbidden and Limited list is released! Go check it out on our " + 
    "Banlist page! Pro Tip: You can filter out all the cards we previously had on the " +
    "list because they were format philosophy hits by clicking the Filter button!",
    "2025/07/07",
    "N/A"
);
const page3 = new article(
    "setart/IGAM.webp",
    "Ignition Ambition Released!",
    "No, its not fiction! we've received your petitions, we have a proposition to " + 
    "transition your submissions into fruition with 1st Edition Ignition Ambition," + 
    "and with your permission, be ready for competition! " + 
    "Go check out our newly finalized Card List to see further details",
    "2025/06/29",
    "N/A"
);
const page4 = new article(
    "news/FAQ2.png",
    "Check out our FAQ!",
    "Have questions? We thought so, head over to our #faq channel for some answers! " + 
    "If you have any questions that aren’t answered by the FAQ please make sure to " + 
    "reach out to us through our Contact Us form on our website!",
    "2025/06/19",
    "N/A"
);
// use + to write article on multiple lines if needed 
const page5 = new article(
    "news/events.png",
    "Event Plans!",
    "Keep an eye out for our upcoming event plans! Details to be announced, " +
    "and make sure you opt into the event roles in our #role-selection channel.",
    "2025/06/19",
    "N/A"
);


const pageList = [page1,page2,page3,page4,page5]; 


// ---------------------------------------------
// ----------------- CODE STUFF ----------------
// ---------------------------------------------

// variable declare junkyard 
let buttonLeft = document.getElementById("buttonleft");
let buttonRight = document.getElementById("buttonright");

let index = 0;

const select = document.getElementById("select");
const pageSelector = select.children;

let newsImage = document.getElementById("news");
let newsHeader = document.getElementById("header");
let newsArticle = document.getElementById("paragraph");
let newsDate = document.getElementById("date");
let linkembed = document.getElementById("linkembed");


// News Article Constructor 
function article(image,header,paragraph,date,link){
    this.image = image,
    this.header = header,
    this.paragraph = paragraph,
    this.date = date,
    this.link = link
}


//Rotating news stuff
let RotationCounter = 0;

setInterval(()=> {
    if (RotationCounter != 10) {
        RotationCounter++
    } else {
        if (index == 4) {
            index = 0
        } else {
            index++
        };
        updateDisplay()
    }
}, 1000);


// display 
function updateDisplay() {
    // return all page indicators to pink
    for (let i = 0; i < pageSelector.length; i++) {
        pageSelector[i].style.backgroundColor = "#e006f7" // pink
        pageSelector[i].style.color = "#e006f7"
    }
    // change current page's color to blue to indicate the current page 
    pageSelector[index].style.backgroundColor = "#01fbf7" // blue
    pageSelector[index].style.color = "#01fbf7";
    // apply new article image, header, and paragraph
    newsImage.src = pageList[index].image;
    newsHeader.textContent = pageList[index].header;
    newsArticle.textContent = pageList[index].paragraph;
    newsDate.textContent = pageList[index].date;
    // check if there's an embeded link
    if (pageList[index].link == "N/A") {
        linkembed.style.pointerEvents = "none"
    } else {
        linkembed.style.pointerEvents = "fill"
        linkembed.href = pageList[index].link;
    }
    
    // reset rotation timer
    RotationCounter = 0;
}

// make sure the default is displayed properly when page is opened 
updateDisplay()


// add eventlistener functionality to all page selector buttons  
for (let i = 0; i < pageSelector.length; i++) {
    pageSelector[i].addEventListener('click',function (event){
        //console.log(event.target)
        index = i
        console.log(index)
        updateDisplay()
    })
}


// increment page number 
buttonRight.addEventListener('click',function(){
    if (index == 4) {
        index = 0
    } else {
        index++
    };
    console.log(index);
    updateDisplay()
});

// decrement page number 
buttonLeft.addEventListener('click', function() {
    if (index == 0) {
        index = 4
    } else {
        index--
    }
    console.log(index)
    updateDisplay()
});