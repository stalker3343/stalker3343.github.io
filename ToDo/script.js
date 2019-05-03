window.onload = function () {
  let inpTask = document.querySelector('.inpTask');
  let btnTaskAdd = document.querySelector('.todo__addtbtn');
  let list = document.querySelector('.todo__item-list');


  let toDo = new Todo();
  btnTaskAdd.addEventListener('click', function () {

    toDo.addItem(inpTask.value);
  })
  list.addEventListener('click', function (e) {
    toDo.delItem(e);
  })
  // list.addEventListener('dblclick', function (e) {
  //   toDo.changeItem(e);

  // })


}


function Todo() {
  let taskList = document.querySelector('.todo__item-list');


  this.addItem = function (text) {
    let item = document.createElement('li');

    item.classList.add('list-group-item', 'todo__item');
    item.innerHTML = '<div class="row align-items-center d-flex"> <div class="col-10"><div class="custom-control custom-checkbox mr-sm-2">' + '<input type="checkbox" class="custom-control-input"> <label class="custom-control-label" >' + text + '</label></div></div><div class="col-2"> <button type="button" class="btn btn-success  todo__deltbtn"></button></div></div>';
    item.addEventListener('click', function () {
      let inp = this.querySelector('input[type="checkbox"]');
      if (inp.checked) {
        inp.checked = false;
      } else {
        inp.checked = true
      }

    })

    taskList.appendChild(item)
  }
  this.delItem = function (item) {
    if (item.target.localName == "button") {
      console.log(item);

      item.target.parentElement.parentElement.parentElement.remove();

    }

  }
  // this.changeItem = function (item) {


  //   if (item.target.localName == "label") {
  //     console.log('лейбл');
  //     item.target.innerHTML = "Ghbdtn";


  //   } else {
  //     console.log(item.target);
  //     let label = item.target.querySelector('label');

  //     label.innerHTML = "Ghbdtn";

  //   }


  // }

}