// Система авторизации сломалась. Мы не видим в модальных окнах, имени пользователя

function askPassword(ok, fail) {
    let password = prompt(user.name + ", введите Ваш пароль:", '');
    if (password === 'rockstar') {
        ok();
    } else {
        fail();
    }
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
askPassword(user.loginOk, user.loginFail);