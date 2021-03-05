var a = prompt('Введите число №1');
if (isNaN(a)){
    alert("Некорректный ввод!");
}else{
    var b = prompt('Введите число №2');
    if (isNaN(b)){
        alert("Некорректный ввод!");
    }else{
        console.log('Ответ: '+ Number(a+b)+', '+Number(a/b) +".");
    }

}