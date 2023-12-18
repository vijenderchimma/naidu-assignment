
let firstSizeColourContainerEl = document.getElementById("firstSizeColourContainer")
let firstContainerEl = document.getElementById("firstContainer")
let radioEl = document.getElementById("radio1")
let radioEl2 = document.getElementById("radio2")
let radioEl3 = document.getElementById("radio3")
let secondContainerEl= document.getElementById("secondContainer")
let secondSizeColourContainerEl = document.getElementById("secondSizeColourContainer")
let thirdContainerEl = document.getElementById("thirdContainer")
let thirdSizeColourContainerEl = document.getElementById("thirdSizeColourContainer")

firstContainerEl.addEventListener('click',function(){
    secondContainerEl.classList.remove("box-container-bg")
    thirdContainerEl.classList.remove("box-container-bg")
    secondSizeColourContainerEl.classList.add("box-size-colour-container2")
    thirdSizeColourContainerEl.classList.add("box-size-colour-container2")
    firstContainerEl.classList.toggle("box-container-bg")
    firstSizeColourContainerEl.classList.toggle("box-size-colour-container2")
    firstSizeColourContainerEl.classList.add("box-size-colour-container")
    radioEl.checked = true
    radioEl2.checked = false
    radioEl3.checked = false
})


secondContainerEl.addEventListener('click',function(){
    firstContainerEl.classList.remove("box-container-bg")
    thirdContainerEl.classList.remove("box-container-bg")
    firstSizeColourContainerEl.classList.add("box-size-colour-container2")
    thirdSizeColourContainerEl.classList.add("box-size-colour-container2")
    secondContainerEl.classList.toggle("box-container-bg")
    secondSizeColourContainerEl.classList.toggle("box-size-colour-container2")
    secondSizeColourContainerEl.classList.add("box-size-colour-container")
    if (radioEl2) {
        radioEl2.checked = true;
    
        // Change the style of the checked radio button
        radioEl2.style.backgroundColor = 'green'; // Change to desired color
        radioEl2.style.color = 'white'; // Change text color
        // You can modify other styles here as well
      }
    radioEl.checked = false
    radioEl3.checked = false
})


thirdContainerEl.addEventListener('click',function(){
    firstContainerEl.classList.remove("box-container-bg")
    secondContainerEl.classList.remove("box-container-bg")
    firstSizeColourContainerEl.classList.add("box-size-colour-container2")
    secondSizeColourContainerEl.classList.add("box-size-colour-container2")
    thirdContainerEl.classList.toggle("box-container-bg")
    thirdSizeColourContainerEl.classList.toggle('box-size-colour-container2')
    thirdSizeColourContainerEl.classList.add("box-size-colour-container")
    radioEl3.checked = true
    radioEl.checked = false
    radioEl2.checked = false
})
