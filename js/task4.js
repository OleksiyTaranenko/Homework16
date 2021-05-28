// Напишите в указанном месте конструкцию с методом bind() так, 
// чтобы this внутри функции func всегда указывал на инпут из переменной elem.

var elem = document.getElementById('elem');


function func(surname, name) {
	console.log(`${this.value}, ${surname} ${name}`);
}


//Тут напишите конструкцию с bind()


let a = func.bind(this.value = elem.value);



function boundFunc() {    
    let b = putItems(' Иванов', ' Иван');
    return b;  
}



function putItems(item1, item2) {    
    let fieldValue = document.getElementById('elem').value;
    document.getElementById('elem').value = document.getElementById('elem').value + item1 + item2;
        
    return fieldValue;
}



boundFunc();

func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'