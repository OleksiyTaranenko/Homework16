// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'привет, Иванов Иван'.
// Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

var elem = document.getElementById('elem');

function func(surname, name) {
	console.log(`${this.value}, ${surname} ${name}`);    
}

func.call(this.elem, 'Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'

function boundFunc() {    
    let b = putItems(' Иванов', ' Иван');
    return b;  
}

function putItems(item1, item2) {    
    let fieldValue = document.getElementById('elem').value;
    document.getElementById('elem').value = document.getElementById('elem').value + item1 + item2;
        
    return fieldValue;
}

boundFunc()