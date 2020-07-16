// 1 переменные
function variabels() {
    var oldVariabel = 'var устаревшей способ объявления переменной, используется в исключительных случаях';
    const staticVariabel = 'const статическая переменная, значение не изменяется'; //нельзя оставлять пустой
    let dynamikVariabel = 'let динамическая переменная, ее значение меняется'; //можно оставлять пустое значение

    console.log (oldVariabel + ' / ' + staticVariabel + ' / ' + dynamikVariabel);

    //объявление переменных
    const _ = '';
    const $ = '';
    const _anyWord = '';
    const thisNumber5 = '';
    //const if = ''; // error
    //const 5thisNumber = ''; // error
    //const number = ''; // лучше не использовать
};


// 2 типы данных
const string = 'строка';
const string123 = '123';
const number123 = 123;
const boolean = true; // true или false
let x

function dataTypes() {
    console.log (typeof string); //typeof - проверка типа данных
    console.log (typeof number123);
    console.log (typeof boolean);
    console.log (typeof x);
    console.log (null); //typeof null выводит object - что является ошибкой
};

// 3 мутирование
function mutation() {
   console.log (string + ' обычная, ' + number123 + ' - числа, ' + boolean+ ' - булево значение, '+ x + ', ' + null +' - ВСЕ ПЕРЕМЕННЫЕ ПРИНЯЛИ СТРОКОВОЕ ЗНАЧЕНИЕ');
   console.log (number123.toString()); // преобразование числа в строку методом .toString()
   
   const massege1 = 'Ваше имя:';
   const firstName = prompt('Введите Имя');
   console.log  (massege1 + ' ' + firstName);
};

// 4 Операторы
    const a = 100;
    const b = 65;
    let c = 32;

function operators(){
    c += a; //c = c + a
    c -= a; //c = c - a
    c *= a; //c = c * a
    c /= a; //c = c / a

    console.log  (c);
    console.log  (a + b);
    console.log  (a - b);
    console.log  (a * b);
    console.log  (a / b);
    console.log  (c++);
    console.log  (c);
    console.log  (++c);
    console.log  (c);
    console.log  (--c); 
};

//5 приоритет операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
function operatorPrecedence(){
    console.log  (a < b);
    console.log  (a > b);
    console.log  (a <= b);
    console.log  (a >= b);

    console.log  (a > b + c); // сначало сложение 
    console.log  (c - a < b); // сначало вычетание
    console.log  ((a <= b) * c); // приоритет у умножения больше чем у вычитания исложения, приоритет скобок больше чем у других операторов
    console.log  (c / (a >= b)); // приоритет у деления больше чем у вычитания исложения, приоритет скобок больше чем у других операторов

    console.log  (number123 == string123); //при двойном равенстве приводит типы данных к одному типу в данном случае к строке
    console.log  (number123 === string123); //при тройном равенстве проверяет и тип данных

};


// 6 Условные операторы
function conditionalStatements(){
    const courseStatus = 'ready' // ready, fail, pending

    if (courseStatus === 'ready'){
        console.log  ('Курс готов');
    } else if (courseStatus === 'pending'){
        console.log ('Курс в разработке');
    } else {
        console.log ('Курс не получился');
    };

    const isReady = true;

   // if (isReady === true){
    //    console.log  ('Курс готов');
  //  } else {
   //    console.log  ('Курс не готов'); 
    // };

    //Тернарное выражение
    isReady ? console.log ('Курс готов!') : console.log ('Курс не готов!'); //короткая запись закомментированной конструкции
};


// 7 Булевая логика 1 и 0 или true и false
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B
// Думаю Дискретная математика будет полезна как некий практикум для отработки логических операций
function booleanLogoc(){
    // И
    console.log  (true && true); // 1 и 1 = 1
    console.log  (true && false); // 1 и 0 = 0
    console.log  (false && true); // 0 и 1 = 0
    console.log  (false && false); // 0 и 0 = 0
    // ИЛИ
    console.log  (true || true); // 1 или 1 = 1
    console.log  (true || false); // 1 или 0 = 1
    console.log  (false || true); // 0 или 1 = 1
    console.log  (false || false); // 0 или 0 = 0
    // НЕ
    console.log  (!true); // не1 = 0
    console.log  (!!true); // не1 -> не0 = 1 
};

// 8 Функции

function myFunction(){

    function calculate(year){
        return 2020 - year;
    };
    
    console.log (calculate(1993));
    console.log (calculate(1991));
    console.log (calculate(1970));

    function logInfoAbout(name, year){
        const age = calculate(year);

        if (age > 0){
            console.log ('Человек по имени ' + name + ' сейчас имеет возраст ' + age + ' лет.');
        } else {
            console.log (name + ' еще не родилась.');
        }
        
    };

   logInfoAbout('Vika', 1994);
   logInfoAbout('Svetlana', 1970);
   logInfoAbout('Katya', 2025);

};

// 9 Массивы

function arryays() {
    const cars = ['Мазда', 'Мерседес', 'Форд'];
    //const cars = new Array('Мазда', 'Мерседес', 'Форд'); - другая запись объявления массива, но лучше использавать 1й вариант

    console.log(cars); //просмотр массива
    console.log(cars[1]); //простомтр значения под индексом
    console.log(cars[0]);
    console.log(cars[5]);
    console.log(cars.length); //проверка длины массива

    cars[0] = 'Порше'; //замена значения под 0м индексом
    console.log(cars); 
    cars[5] = 'Мазда'; //добавление зачения под 5м индексом
    cars[cars.length] = 'Тойота Chaser';
    console.log(cars.length); 
    console.log(cars[3]); //вывод: массов состоит из [0:Порше, 1:Мерседес, 2:Форд, 3:'', 4:'', 5:Мазда, 6:Тойота Chaser] = 7
    console.log(carsResult); 
};

// 10 циклы
function cycle1() {
    const cars2 = ['Мазда', 'Мерседес', 'Форд', 'Порше'];

    for (let i = 0; i < cars2.length; i++) { //длинная запись
        const car = cars2[i];
        console.log(car);
    };

    for (let car2 of cars2){ //короткая запись
        console.log(car2);
    };
};

// 11 Объекты
function myObject() {
   // const person = new Object({}) - устаревшая запись
   const person = {
        firstName: 'Victoria',
        lastName: 'Abdykhanova',
        year: 1993,
        languages: ['RU', 'EN', 'DE'],
        hasBand: false,
        greet() { //сокращенная запись функции внутри объекта, но называется это методом
            console.log('greet from person');
        }
   };
   console.log(person);
   console.log(person['lastName']);
   const key = 'languages';
   console.log(person[key]);
   const key2 = 'year';
   console.log(person[key2]);
   person.greet();
   person.hasBand = !!true;
   person.isProgrammer = true;
   console.log(person);

    
};

