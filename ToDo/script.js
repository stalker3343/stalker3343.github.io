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
    toDo.changeItem(e);
  })
  list.addEventListener('tap', function (e) {
    toDo.delItem(e);
    toDo.chekd(e);
    toDo.confirChange(e);
    toDo.changeItem(e);
  })
  // list.addEventListener('click', function (e) {


  // })
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
        '   <div class="label_text">' + text +
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
      let textInp = item.target.previousElementSibling.value;
      if (textInp == "") {
        item.target.closest('.todo__item').remove();

      } else {
        item.target.parentElement.classList.add('hidden');
        item.target.parentElement.previousElementSibling.innerHTML = textInp;
        item.target.parentElement.previousElementSibling.style.display = "block";
      }

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

function Popup() {
  let popUpLoad = document.createElement('div');
  popUpLoad.classList.add('overlay');
  popUpLoad.innerHTML = '<div class="popUp">  <div class="contentPOpup"></div> <div class="close">&times;</div></div>';
  document.body.appendChild(popUpLoad);
  let That = this;

  let overlay = document.querySelector('.overlay');
  let popUp = document.querySelector('.popUp');

  this.open = function (text) {

    overlay.style.display = 'flex';
    popUp.querySelector('.contentPOpup').innerHTML = text;

  }
  this.close = function () {

    overlay.style.display = 'none';
  }
  window.onclick = function (event) {
    if (event.target == overlay) {
      That.close()
    }
  }
  // overlay.addEventListener('click', function (e) {
  //   console.log(e.target.closest('.overlay'));

  //   if (e.target.closest('.overlay') == null) {

  //   }


  // });

}
let p = new Popup();