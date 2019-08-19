window.onload = function() {
  let inpTask = document.querySelector('.inpTask');
  let btnTaskAdd = document.querySelector('.todo__addtbtn');
  let list = document.querySelector('.todo__item-list');
  let actualVersion = '0.0.1';

  let toDo = new Todo();

  btnTaskAdd.addEventListener('click', function() {
    toDo.addItem(
      {
        text: inpTask.value.trim(),
        check: false
      },
      true
    );
    inpTask.value = '';
  });
  list.addEventListener('click', function(e) {
    toDo.delItem(e);
    toDo.chekd(e);
    toDo.confirChange(e);
    toDo.changeItem(e);
  });
  list.addEventListener('tap', function(e) {
    toDo.delItem(e);
    toDo.chekd(e);
    toDo.confirChange(e);
    toDo.changeItem(e);
  });

  //Акутализация localStorage
  if (JSON.parse(localStorage.getItem('Version')) != actualVersion) {
    localStorage.clear();
    localStorage.setItem('Version', JSON.stringify(actualVersion));
    console.log('Очистка');
  }

  //Вывод обьектов при наличии из localStorage
  let returnObj = JSON.parse(localStorage.getItem('DoLIst'));
  if (returnObj != null) {
    for (let i = 0; i < returnObj.length; i++) {
      toDo.addItem(returnObj[i], false);
    }
  }
};

function Todo() {
  let taskList = document.querySelector('.todo__item-list');

  let returnObj = JSON.parse(localStorage.getItem('DoLIst'));
  let StorageData;
  if (returnObj != null) {
    StorageData = returnObj;
  } else {
    StorageData = [];
  }

  this.addItem = function(createParam, pushParam) {
    if (createParam.text != '') {
      //создание li
      let item = document.createElement('li');
      item.classList.add('list-group-item', 'todo__item');
      if (createParam.check) {
        item.style.background = 'rgb(32, 137, 55)';
        item.style.color = 'white';
      }
      //создание input
      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.classList.add('custom-control-input');
      input.setAttribute('checked', 'checked');
      createParam.check
        ? input.setAttribute('checked', 'checked')
        : input.removeAttribute('checked');
      //Внедрение
      item.innerHTML =
        ' <div class="custom-control custom-checkbox d-flex align-items-center"> ' +
        input.outerHTML +
        ' <label class="custom-control-label d-flex">' +
        '   <div class="label_text">' +
        createParam.text +
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
        let text = {
          text: createParam.text,
          check: false
        };
        StorageData.push(text);
        localStorage.setItem('DoLIst', JSON.stringify(StorageData));
      }
    }
  };

  this.chekd = function(e) {
    if (
      e.target.localName == 'li' ||
      (e.target.closest('.todo__item') != null &&
        !e.target.classList.contains('label_text') &&
        !e.target.classList.contains('inputChange') &&
        !e.target.classList.contains('todo__btn-confirm'))
    ) {
      let confirmElem = e.target.closest('li');
      let inp = confirmElem.querySelector('input');
      inp.checked = inp.checked ? (inp.checked = false) : (inp.checked = true);
      if (inp.checked) {
        confirmElem.style.background = 'rgb(32, 137, 55)';
        confirmElem.style.color = 'white';
        // логика Локал стореджа
        let index = StorageData.findIndex(
          obj => obj.text == confirmElem.querySelector('.label_text').innerHTML
        );
        StorageData.splice(index, 1, {
          text: StorageData[index].text,
          check: true
        });
        localStorage.setItem('DoLIst', JSON.stringify(StorageData));
        // ---логика Локал стореджа
      } else {
        confirmElem.style.background = 'none';
        confirmElem.style.color = 'black';
        // логика Локал стореджа
        let index = StorageData.findIndex(
          obj => obj.text == confirmElem.querySelector('.label_text').innerHTML
        );
        StorageData.splice(index, 1, {
          text: StorageData[index].text,
          check: false
        });
        localStorage.setItem('DoLIst', JSON.stringify(StorageData));
        // ---логика Локал стореджа
      }
    }
  };

  this.delItem = function(item, delParam) {
    let deletedText;
    let param = delParam || false;
    if (item.target.classList.contains('todo__deltbtn') || param) {
      deletedText = item.target
        .closest('li')
        .querySelector('.label_text')
        .innerHTML.trim();
      item.target.closest('li').remove();
      // логика Локал стореджа
      let index = StorageData.findIndex(obj => obj.text == deletedText); //Фича поиска индекса обьекта в масиве обьектов
      StorageData.splice(index, 1);
      localStorage.setItem('DoLIst', JSON.stringify(StorageData));
      // ---логика Локал стореджа
    }
  };

  this.confirChange = function(item) {
    if (item.target.classList.contains('todo__btn-confirm')) {
      let confirmElem = item.target.closest('li');
      let textInp = confirmElem.querySelector('.inputChange').value.trim();

      if (textInp == '') {
        this.delItem(item, true);
      } else {
        // логика Локал стореджа
        let index = StorageData.findIndex(
          obj => obj.text == confirmElem.querySelector('.label_text').innerHTML
        );
        StorageData.splice(index, 1, {
          text: textInp,
          check: false
        });
        localStorage.setItem('DoLIst', JSON.stringify(StorageData));
        // ---логика Локал стореджа

        confirmElem.querySelector('.label__change').classList.add('hidden');
        confirmElem.querySelector('.label_text').innerHTML = textInp;
        confirmElem.querySelector('.label_text').style.display = 'block';
      }
    }
  };

  this.changeItem = function(item) {
    if (item.target.classList.contains('label_text')) {
      item.target.style.display = 'none';
      item.target.nextElementSibling.classList.remove('hidden');
      item.target.nextElementSibling.firstElementChild.value = item.target.innerHTML;
    }
  };
}
