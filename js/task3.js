// Добавьте в последнюю строчку метод apply() так, чтобы на экран вывелось 'привет, Иванов Иван'.
// Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

var elem = document.getElementById('elem');

function Func(surname, name) {
	console.log(`${this.value}, ${surname} ${name}`);
}



function Func2(arg1, arg2) {
    Func.apply(this.elem, arguments);
    
}; //тут должно вывести 'привет, Иванов Иван'


Func2.prototype = Object.create(Func.prototype);

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
Func2('Иванов', 'Иван');