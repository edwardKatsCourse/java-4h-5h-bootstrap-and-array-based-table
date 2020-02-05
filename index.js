let f1 = function () {
    return 'abc';
};

function f3() { //void
    console.log('f3 function');
}

let f2 = f3;
f2();

//method vs function
//method - это конструкция языка. Метод нельзя передать как "параметер"
//function - это еще и тип данных. Функцию можно положить в переменную и передать

//declaration
//call  -> ()

