var a = Number(prompt('Введите число'));
var b = Number(prompt('Введите систему счисления числа'));

if (b<=36 && b>=2){
    a = a.toString(b);
    if(a === 'NaN'){
        alert('Некорректный ввод!');
    }
    else{
        console.log('Ответ:'+' '+a.toString(b)); 
    }
}else{
    alert('Некорректный ввод!');
}
