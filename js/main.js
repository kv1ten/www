'use strict';

let login = prompt('Кто там?')
if (login == 'Админ') {
  
  let pass = prompt('Какой пароль?')
  if (pass == 'Я главный') {
    alert ('Здравствуйте');
  }
  else if (pass == null) {
    alert ('Отмена');
  }
  else {
    alert ('Не правильный пароль');
  }
}

else if (login == null) {
  alert ('Отмена');
}

else {
  alert ('я вас не знаю');
}