var inputText = document.getElementById("input");
var submit = document.getElementById("button");
var todoListTag = document.getElementById("todolist");

// array to store all todo elements

// if(localStorage.getItem("todoArr")!=null){
//   var todoArr = JSON.parse(localStorage.getItem("todoArr"))
// }else{
//   var todoArr=[]
// }

var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []
display()
// when add button is clicked
submit.addEventListener("click", addItemToArray);

// when enter is clicked addItemToArray
input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addItemToArray();
  }
});
function addItemToArray() {
  // push the value to the array if it's not empty
  if (inputText.value != "") {
    todoArr.push(inputText.value);
  }

  // reset the value to empty string
  inputText.value = "";

  display();
}

function display() {
  // clear outprevious old ones
  todoListTag.innerHTML = "";
  todoArr.map((curr, i) => {
    // structure of li tag
    var listItem = ` <li class="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`;
    // insert it inside ul
    todoListTag.innerHTML += listItem;
  });
}

function deleteItem(index){
    // delete the element 
    todoArr.splice(index,1)
    display();
}

function editItem(index){
    // get new value from prompt
    var newValue = prompt("pls Edit")
    // edit the element
    todoArr.splice(index,1,newValue)
    display();
}

document.getElementById("reset").addEventListener("click",()=>{
    todoArr=[]
    display()
})

// local storage
var cartArr = ["Book","Pen","Eraser"]
localStorage.setItem("cart",JSON.stringify(cartArr))


cartArr.push("scale")
localStorage.setItem("cart",JSON.stringify(cartArr))  

console.log("cartArr:",cartArr)
var tempArr = JSON.parse(localStorage.getItem("cart"))
console.log("tempArr:",tempArr)