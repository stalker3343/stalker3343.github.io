window.onload = function () {
  let inpTask = document.querySelector('.inpTask');
  let btnTaskAdd = document.querySelector('.todo__addtbtn');
  let list = document.querySelector('.todo__item-list');


  let toDo = new Todo();

  btnTaskAdd.addEventListener('click', function () {
    toDo.addItem(inpTask.value.trim(), true);
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

  // localStorage.clear();
  let returnObj = JSON.parse(localStorage.getItem("DoLIst"));
  if (returnObj != null) {
    for (let i = 0; i < returnObj.List.length; i++) {
      toDo.addItem(returnObj.List[i], false)

    }
  }
}


function Todo() {

  let taskList = document.querySelector('.todo__item-list');

  let returnObj = JSON.parse(localStorage.getItem("DoLIst"));
  let StorageData;
  if (returnObj != null) {
    StorageData = returnObj;
  } else {
    StorageData = {
      "List": [],
    }
  }


  this.addItem = function (text, pushParam) {
    if (text != "") {
      let item = document.createElement('li');
      item.classList.add('list-group-item', 'todo__item');

      item.innerHTML = ' <div class="custom-control custom-checkbox d-flex align-items-center"> ' +
        ' <input type="checkbox" class="custom-control-input">' +
        ' <label class="custom-control-label d-flex">' +
        '   <div class="label_text">' + text +
        '</div>' +
        '  <div class="label__change hidden">' +
        '    <input type="text" class="inputChange">' +
        '    <button class="btn  btn-success btn-sm todo__btn-confirm">Ок</button>' +
        '  </div>' +
        ' </label>' +
        '  <button type="button" class="btn btn-success  todo__deltbtn"></button>' +
        ' </div>';
      taskList.appendChild(item);

      if (pushParam) {
        StorageData.List.push(text);
        localStorage.setItem("DoLIst", JSON.stringify(StorageData));
      }
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

  this.delItem = function (item, delParam) {
    let deletedText;
    let param = delParam || false;
    if (item.target.classList.contains("todo__deltbtn") || param) {
      deletedText = item.target.closest('li').querySelector('.label_text').innerHTML.trim();
      item.target.closest('li').remove();
      let index = StorageData.List.indexOf(deletedText);
      StorageData.List.splice(index, 1);
      localStorage.setItem("DoLIst", JSON.stringify(StorageData));
    }




  }

  this.confirChange = function (item) {
    if (item.target.classList.contains("todo__btn-confirm")) {
      let confirmElem = item.target.closest('li');
      let textInp = confirmElem.querySelector('.inputChange').value.trim();

      if (textInp == "") {
        this.delItem(item, true);
      } else {
        // логика Локал стореджа
        let index = StorageData.List.indexOf(confirmElem.querySelector('.label_text').innerHTML);
        StorageData.List.splice(index, 1, textInp);
        localStorage.setItem("DoLIst", JSON.stringify(StorageData));
        // ---логика Локал стореджа
        confirmElem.querySelector('.label__change').classList.add('hidden');
        confirmElem.querySelector('.label_text').innerHTML = textInp;
        confirmElem.querySelector('.label_text').style.display = "block";


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


}
let p = new Popup();