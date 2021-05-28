// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.




var elem = document.getElementById('elem');

function func() {
	console.log(this.value);
	alert(this.value);
}

func.call(this.elem); //тут должно вывести value инпута