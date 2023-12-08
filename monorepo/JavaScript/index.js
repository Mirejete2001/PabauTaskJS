const inputsContainer = document.querySelector('.input-container')
const randomValues = ["A", "B", "C", "D"]
const inputWrapper = document.querySelectorAll('.input')
const selectedTxt = document.createElement('p');
let selectedBoxes = []

const Change = () => {
    inputWrapper.forEach((el,i)=>{
        console.log(el)
        el.children[0].value = randomValues[i]
        el.children[1].textContent = randomValues[i]
    })
}
const Show = () => {
    let checkboxes =[]
    inputWrapper.forEach(el=> { checkboxes.push(el.children[0])})
    checkboxes.forEach(box => {
        box.checked ? selectedBoxes.push(box.value) : null;
    });
    if(selectedBoxes.length !=0){
        selectedTxt.innerHTML = `You've selected inputs with values <span> ${selectedBoxes} </span>`
    }
    else{
        selectedTxt.innerHTML = `Please select a value`
    }
    document.body.appendChild(selectedTxt)
    selectedBoxes = []
}

const Shuffle = (arr) => {
    arr = Array.from(arr)
    console.log(arr)
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    // lines 19 to 24 could be replaced with
    // arr.sort(()=>Math.random()-0.5)
    arr.forEach(element => {
        inputsContainer.appendChild(element)
    });
    // console.log(arr)
    return arr;


    // provoje me e bo me css order
}

document.querySelector('.shuffle').addEventListener('click', () => Shuffle(inputWrapper))
document.querySelector('.change').addEventListener('click', Change)
document.querySelector('.showSelected').addEventListener('click', Show)