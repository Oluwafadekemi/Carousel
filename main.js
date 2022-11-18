//selecting HTML elements
let previousBtn = document.getElementById("p-btn");
let nextBtn = document.getElementById("n-btn");
let row = document.getElementById("row");
let one = document.getElementById("box-one");
let two = document.getElementById("box-two");
let three = document.getElementById("box-three");
let four = document.getElementById("box-four");
let five = document.getElementById("box-five");
let six = document.getElementById("box-six");
let h = document.getElementById("slide-heading");

//heading words and assignment of index
let headingIndex = 0;
let heading = ["1: Frozen mountain.", "2: Sunset.", "3: Awesome tree.", "4: Somewhere in the desert.", "5: Hills with trees", "6: Beautiful flower."];
h.innerHTML = heading[headingIndex]

//adding the change in transform property to enable slide movement
let translateProperty = 0;
let arrayOfBoxes = [one, two, three, four, five, six];
row.style.transform = "translate(" +translateProperty + "px )";


//click event listeners
previousBtn.addEventListener("click", subtractBox);
nextBtn.addEventListener("click", addBox);

//the addBox enables the translate to increase by 300 everytime it is clicked and also change the words in the heading.
function addBox() {
    translateProperty+=-300;
    headingIndex++;
    for (let i = 0; i < arrayOfBoxes.length * 300 ; i+=300){
        row.style.transform = "translate(" +translateProperty + "px )";
        for(let i = 0; i < heading.length; i++ ){
            h.innerHTML = heading[headingIndex]

        }
    }
    if (translateProperty < (arrayOfBoxes.length * -300 + 300) ) {
        translateProperty = 0;
        for (let i = 0; i < arrayOfBoxes.length * 300; i++){
            row.style.transform = "translate(" +translateProperty + "px )";
            for(let i = 0; i < heading.length; i++ ){
                headingIndex = 0;
                h.innerHTML = heading[headingIndex]

            }
        }
    }
    
}

function subtractBox() {
    translateProperty-=-300;
    headingIndex--;
    for (let i = 0; i < arrayOfBoxes.length * 300 ; i+=300){
        row.style.transform = "translate(" +translateProperty + "px )";
        for(let i = 0; i < heading.length; i++ ){
            h.innerHTML = heading[headingIndex]
             console.log(h.innerHTML = heading[headingIndex]);
        }
        
    }
    if (translateProperty > 0) {
        translateProperty = arrayOfBoxes.length * -300 + 300;
        for (let i = 0; i < arrayOfBoxes.length * 300; i++){
            row.style.transform = "translate(" +translateProperty + "px )";
            for(let i = 0; i < heading.length ; i++ ){
                headingIndex = heading.length - 1;
                h.innerHTML = heading[headingIndex]
                 console.log(h.innerHTML = heading[headingIndex]);
            }
        }
    }
}

