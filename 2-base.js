// 1 Числа
function numbers() {
    const num = 42; // целое число
    const float = 42.42; // десятичное число
    const pow = 10e3; // число 10в 3й степени

    console.log(num, float, pow);

    console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);  //максимальное число 9007199254740991, с которым можно проводить операции
    console.log('Math.pow 53', Math.pow(2, 53) -1); //тоже число, что и в записе выше

    console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER); //минимальное число
    console.log('MIN_VALUE', Number.MIN_VALUE); // 5 в степени -324
    console.log('MAX_VALUE', Number.MAX_VALUE); // 1.7976931348623157 в степени 308
    console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY, '2 / 0 =', 2 / 0); // +бесконечность
    console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY); // -бесконечность
    console.log('NaN', Number.NaN, typeof NaN, 2 / undefined); // не число, но относится к типу данных числа
    
    const weird = 2 / undefined;
    console.log(Number.isNaN(weird)); // false - Number.isNaN позволяет проверить относится ли значение переменной к Nan или числу
    console.log(Number.isNaN(42)); // true
    console.log(isFinite(Infinity)); // false
    console.log(isFinite(42)); // true

    const stringInt = '42';
    console.log(stringInt + 2); // получаем 422, т.к. первое значение является строкой
    
    // преобразование строчки в число
    console.log(parseInt(stringInt) + 2); 
    console.log(Number(stringInt) + 2); 
    console.log(+stringInt + 2); 

    const stringFloat  = '42.42';
   // console.log(parseInt(stringFloat) + 2); // получим 44 - т.е. не работает с десятичными числами
    console.log(parseFloat(stringFloat) + 2); // получим 44,42
    console.log(Number(stringFloat) + 2);  // получим 44,42
    console.log(+stringFloat + 2); // получим 44,42

    // особенности арифметики в JS
    console.log(0.4 + 0.2); // = 0.6000000000000001(число)
    console.log((0.4 + 0.2).toFixed(1)); // - у числа 0.6000000000000001(число) отчекаются символы до 1го после . = 0.6(строка) - НО МЫ ПОЛУЧАЕМ СТРОКУ!
    console.log(+(0.4 + 0.2).toFixed(1));  // = 0,6(число) 1 вариант: добавляем + перед выражением сложения, указывая, что это число 
    console.log(parseFloat( (0.4 + 0.2).toFixed(1) )); // = 0,6(число) 2 ариант 
};


// 2 Тип данных BigInt
function myBigInt() {
    console.log(typeof 900719925474099199999n); // bigint
    console.log(900719925474099199999n - 9007199254740991999n); // 891712726219358208000n
    console.log(-9007199254740991999n);

    // console.log(9007199254740991999.5689684n); // error
    // console.log(10n - 4);  // error

    console.log(parseInt(10n) - 4);  // = 6(число)
    console.log(10n - BigInt(4)); // = 6n(bigInt)
};

// 3 Math
function myMath() {
    console.log('Экспонента', Math.E);
    console.log('ПИ', Math.PI);

    console.log('Корень кв из 25', Math.sqrt(25));
    console.log('Степень 5 в 3й', Math.pow(5, 3));
    console.log('Абсолютное значение', Math.abs(-42));
    console.log('Max число', Math.max(42, 112, 23, 11, 422));
    console.log('Min число', Math.min(42, 112, 23, 11, 422));
    console.log('Округляет до ближайшего меньшего целого 4,9', Math.floor(4.9));
    console.log(' Округляет до ближайшего большего целого 4,1', Math.ceil(4.1));
    console.log('округлённое к ближайшему целому 4,9', Math.round(4.9));
    console.log('удаляет дробную часть числа 4.954848', Math.trunc(4.954848));
    console.log(Math.random()); //рандомное число

    //пример использования
    function getRandomBeetween(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min); 
    };
    console.log(getRandomBeetween(50, 10));

};


// 4 Строки
function myString() {
    const name ='Виктория';
    const age = 26;
  
     function getAge() {
        return age;    
    };

    const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'; // устаревшая запись, все переменные приводит к типу строки
    const output2 = `Привет, меня зовут ${name} и мой возраст ${age} лет.`; // современная запись
    const output3 = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет.`; // можно вызывать функцию
    const output4 = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'меньше 30' : 'больше 30'} лет.`; // можно вставлять тернарные варажения
    // можно прописывать разметку, приэтом пробелы и новые строки будут сохраняться
    const output5 = `
        <div>This is DIV</div> 
        <p>This is p</p>
    `;

    console.log(output);
    console.log(output2);
    console.log(output3);
    console.log(output4);
    console.log(output5);

    function logPerson(s, name, age) { // 1п массив из строк: ["Имя: ", ", возраст: ", "!", raw: Array(3)]   2п: 'Вика'  3п:  27
       if (age < 0){
           age = 'Еще не родился';
       };
        return `${s[0]}${name}${s[1]}${age}${s[2]}`; // по сути вызываем позиции шаблона const output6 
    };

    const personName = 'Вика';
    const personAge = 27;
    const personName2 = 'Максим';
    const personAge2 = -10;

    const output6 = logPerson `Имя: ${personName}, возраст: ${personAge}!`; // обращаемся к функции logPerson и задаем параметры name и age, а параметр s - это массив из строк ["Имя: ", ", возраст: ", "", raw: Array(3)]
    console.log('[LOG] output6', `<${typeof output6}>`, output6); // возвращяет  return

    const output7 = logPerson `Человек: ${personName2}, возраст: ${personAge2}!`;
    console.log('[LOG] output7', `<${typeof output7}>`, output7); 
};
 

// 5 Метод String
function methodString() {
    const name ='Виктория';

    console.log(name.length); // считает колличество знаков в строке и возвращает число
    console.log(name.toLocaleUpperCase()); // приводит строку к верхнему регистру
    console.log(name.toLocaleLowerCase()); // приведит строку к нижнему регистру
    console.log(name.charAt(2)); // выводит значение на 2й позиции виКтория
    console.log(name.indexOf('и')); // выводит номер позиции в строке, которая соответствуек первому совпадению с буквой И
    console.log(name.startsWith('виктор')); // выводит false, т.к. проверяет полное соответствие заданного в startsWith, включая регистр
    console.log(name.toLocaleLowerCase().startsWith('виктор')); // выводит true, т.к. перевели значение переменной name, к нижнему регистру
    console.log(name.endsWith('ия!')); // выводит false, проверяет заканчивается ли строка символами другой строки
    console.log(name.repeat(3)); // повторение строки 3 раза

    const string = '   password   '; // сохраняет невидимые символы
    console.log(string); 
    console.log(string.trim()); // удаляет все невидимые пробелы
    console.log(string.trimLeft()); 
    console.log(string.trimRight());  
};


// 6 Функции
function myFunction2() {
    
    // Function Declaration - можно вызывать в любой части кода
    function greet(name) {
        console.log('Привет - ', name);
    };

    greet ('Лена');
   
    // Function Expression - можно вызывать только после создания функции
    const greet2 = function greet2(name) {
        console.log('Привет2 - ', name);
    };
    
    greet2 ('Костя');

    console.log(typeof greet);
    console.dir(greet);

    // Анонимные функции
    let counter = 0;
    const interval = setInterval(function(){
        if (counter === 5){
            clearInterval(interval); //clearTimeout
        } else {
       //     console.log(++counter);
        };
    }, 1000);

    // Стрелочные функции
    const arrow = (name) => { // короткая запись функции greet
        console.log('Привет - ', name);
    };

    const arrow2 = name => console.log('Привет - ', name); // короткая запись функции arrow

    arrow('Паша');
    arrow2('Паша2');

    const pow2 = num => num ** 2; // ** - возвести в степень
    console.log(pow2(5));

    // Параметры по умолчанию
    const sum = (a = 40, b = a * 2) => a + b;
    console.log(sum( 41, 4));
    console.log(sum());
    
    function samAll (...all){
        let result = 0;
        for (let nam of all){
            result += nam;
        };
        return result;
    };

    const res = samAll (1, 2, 3, 4, 5);
    console.log(res);

    // Замыкание
    function createMember (name){
        return function (lastName){
            console.log(name + lastName);
        };
    };

    const logWithLastName = createMember('Абдуханова ');
    console.log(logWithLastName('Виктория'));
    console.log(logWithLastName('Вика'));
};