let addeditm = document.querySelector(".addeditem");
const todo = [];
let toggle = 0;

function reloadhtml() {
  let innhtml = ``;
  todo.forEach((item, index) => {
    innhtml += `<div class="item_added" onclick="stricktog(${index})" ><p> ${item.taskvalue} </p><p> ${item.datevalue} </p><ion-icon name="trash"  onclick="deletefun(${index})"></ion-icon></div>`;
  });

  addeditm.innerHTML = innhtml;
  toggle = 0;
  animation();
}

function deletefun(i) {
  todo.splice(i, 1);
  reloadhtml();
  toggle = 1;
  animation()
  
}

function addtodo() {
  let inputhtml = document.querySelector(".text-input");
  let inputdate = document.querySelector(".input_date");
  const taskvalue = inputhtml.value;
  const datevalue = inputdate.value;

  if (taskvalue && datevalue !== "") {
    todo.push({
      taskvalue,
      datevalue,
    });

    inputhtml.value = ``;
    inputdate.value = "";
    reloadhtml();
  }
}

document.querySelector("#todoinp").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addtodo();
  }
});

function animation() {
  const lastChild = addeditm.lastElementChild;
  if (toggle == 0) {
    lastChild.classList.add("item_ani");
  } else {
    lastChild.classList.remove("item_ani");
  }
}

function stricktog(a){
  addeditm.children[a].classList.toggle("strick");

}
reloadhtml();
