window.onload = function () {
  let inpTask = document.querySelector('.inpTask');
  let btnTaskAdd = document.querySelector('.todo__addtbtn');
  let list = document.querySelector('.todo__item-list');


  let toDo = new Todo();

  btnTaskAdd.addEventListener('click', function () {
    toDo.addItem(inpTask.value);
    inpTask.value = "";
  })
  list.addEventListener('click', function (e) {
    toDo.delItem(e);
    toDo.chekd(e);
    toDo.confirChange(e);
  })
  list.addEventListener('dblclick', function (e) {
    toDo.changeItem(e);

  })
  document.addEventListener('click', function (e) {


  })


}


function Todo() {
  let taskList = document.querySelector('.todo__item-list');

  this.addItem = function (text) {
    if (text != "") {
      let item = document.createElement('li');
      item.classList.add('list-group-item', 'todo__item');

      item.innerHTML = ' <div class="custom-control custom-checkbox d-flex align-items-center"> ' +

        ' <input type="checkbox" class="custom-control-input">' +
        ' <label class="custom-control-label d-flex">' +
        '   <div class="label_text">Check this custom checkbox' +
        '   </div>' +

        '  <div class="label__change hidden">' +
        '    <input type="text" class="inputChange">' +
        '    <button class="btn  btn-success btn-sm todo__btn-confirm">Ок</button>' +
        '  </div>' +
        ' </label>' +


        '  <button type="button" class="btn btn-success  todo__deltbtn"></button>' +
        ' </div>';


      taskList.appendChild(item)
    }
  }

  this.chekd = function (e) {
    if (e.target.localName == "li" || e.target.closest('.todo__item') != null && !e.target.classList.contains("label_text") &&
      !e.target.classList.contains("inputChange") && !e.target.classList.contains("todo__btn-confirm")) {
      let inp = e.target.closest('li').querySelector('input');
      inp.checked = inp.checked ? inp.checked = false : inp.checked = true
      if (inp.checked) {
        e.target.closest('li').style.background = "rgb(32, 137, 55)";
        e.target.closest('li').style.color = "white";
      } else {
        e.target.closest('li').style.background = "none";
        e.target.closest('li').style.color = "black";
      }
    }
  }

  this.delItem = function (item) {
    if (item.target.classList.contains("todo__deltbtn")) {
      item.target.closest('li').remove();
    }
  }
  this.confirChange = function (item) {

    if (item.target.classList.contains("todo__btn-confirm")) {
      let text = item.target.previousElementSibling.value;
      item.target.parentElement.classList.add('hidden');
      item.target.parentElement.previousElementSibling.innerHTML = text;
      item.target.parentElement.previousElementSibling.style.display = "block";



    }


  }

  this.changeItem = function (item) {
    if (item.target.classList.contains("label_text")) {
      item.target.style.display = "none";
      item.target.nextElementSibling.classList.remove('hidden');
      item.target.nextElementSibling.firstElementChild.value = item.target.innerHTML;


    }
  }

}