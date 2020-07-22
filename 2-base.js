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


// 7 Массивы
function myArrays (){
    const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес'];
    const fib = [1, 1, 2, 3, 5, 8, 13];
    const people = [
        {name: 'Vladimir', budget: 4200},
        {name: 'Elena', budget: 3500},
        {name: 'Ekaterina', budget: 1700},
    ];

    cars.push('Рено');
    cars.unshift('Волга');
    console.log(cars);

    const firstCar =  cars.shift();
    console.log(firstCar);

    const lastCar = cars.pop();
    console.log(lastCar);
    console.log(cars);
    
    console.log(cars.reverse());

    const index = (cars.indexOf('БМВ'));
    console.log(cars[index]);
    cars[index] = 'Порш';
    console.log(cars);

    const index2 = people.findIndex(function(person) {
        return person.budget === 3500;
    });
    console.log(people[index2]);

   // const person = people.find(function(person) {
   //     return person.budget === 3500;
   // });
    const person = people.find(person => person.budget === 3500)
    console.log(person);

    const upperCaseCars = cars.map(car => {
    return car.toUpperCase();
    });
    console.log(upperCaseCars);

    const pow2 = num => num ** 2;
    const pow2Fib = fib.map(pow2);
    const filteredNumbers = pow2Fib.filter(num => num > 20);
    console.log(pow2Fib);
    console.log(filteredNumbers);

    const allBudger = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget;
        return acc;
    }, 0);

    console.log(allBudger);

    // Задача 1
    const text  = 'Привет, мы изучаем JavaScript';
    const reverseText = text.split('').reverse().join('');
    console.log(reverseText);

};

// 8 Объекты
function myObjects2 () {
    const person = {
        name: 'Viktoria',
        age: 26,
        isProgrammer: true,
        languages: ['en', 'ru', 'de'],
        'complex key':'Cpmplex Value',
        ['key_' + (1 +3 )]: 'Computer Key', //key_4
        greet(){
            console.log('greet from person');
        },
        info () {
            console.log('this', this);
            console.info('Информация про человека по имени', this.name);
        }

    };

    console.log(person);
    console.log(person.name);
    const ageKey = 'age';
    console.log(person[ageKey]);
    console.log(person['complex key']);
    person.greet();

    person.age++;
    person.languages.push('by');
    delete person['key_4'];

    console.log(person);
    console.log(person['key_4']);

    const {name, age:personAge, languages} = person; // присваивание значений свойств переменным
    console.log(name, personAge, languages);

    for (let key in person){
        if (person.hasOwnProperty(key)) {
            console.log('key', key);
            console.log('value', person[key]);
        };
    };

    const keys = Object.keys(person);
    console.log(keys);

    Object.keys(person).forEach((key) => {
        console.log('key', key);
        console.log('value', person[key]);
    });

    const logger = {
        keys() {
            console.log('Ojgect keys:', Object.keys(this));
        }
    };
    const bound = logger.keys.bind(person); // альтернатива logger.keys.call(person); - без вызова функции
    bound();


    const logger2 = {
        keys() {
            console.log('Ojgect keys2:', Object.keys(this))
        },

        keysAndValues() {
            Object.keys(this).forEach( key => { // при данной конструкции не использовать обычную функциюы
                console.log(`"${key}": ${this[key]}`);
            });
        },

        withParams (top = false, beetween = false, bottom = false) {
            if (top) {
                console.log('------- Start -------');
            };
            
            Object.keys(this).forEach( (key, index, array) => { 
                console.log(`"${key}": ${this[key]}`);
                if (beetween && index !== array.length - 1) {
                    console.log('-------');
                };
            });

            if (bottom) {
                console.log('------- End -------');
            };
        }
    };
  logger2.keysAndValues.call(person);
  logger2.withParams.call(person, true, true, true);

};


// 9 Ассинхронность
function asynchrony () {
    // Event Loop
   const timeout =  setTimeout( () => {
        console.log('After timeout');
    }, 2500);

    clearTimeout(timeout);

    const interval = setInterval(() => {
     //   console.log('After interval');
    }, 1000);

  //  const delay = (callback, wain = 1000) => {
  //      setTimeout(callback, wain);
  //  };

  //  delay( () => {
   //     console.log('After  2 seconds');
   // }, 2000); 
   
   // Промис
   const delay = (wait = 1000) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
           // resolve();
            reject('Что-то пошло не так.');
            }, wait);
        })
        return promise;
   };

   delay(2000)
   .then(() => {
    console.log('After 2 seconds');
   })
   .catch(err => console.error('Error', err))
   .finally(() => console.log('Finally'));

   const getData = () => new Promise(resolve => resolve([
       1, 1, 2, 3, 5, 8, 13
   ]));

  // getData().then(data => console.log(data));

   async function asyncExample() {
    try {
        await delay(3000);
        const data = await getData();
        console.log('Data', data);
    } catch (e) {
        console.log(e) 
    } finally {
        console.log('Finally');
    };
   
   };

   asyncExample();

};


// 10 Работа с DOM
function dom() {
    const heading = document.getElementById('hello');
    //const heading2 = document.getElementsByTagName('h2')[0];
    //const heading2 = document.getElementsByClassName('h2-class')[0];
    const heading2 = document.querySelector('h2'); //возвращает 1 элемент первый попавшийся
    const heading3 = document.querySelector('.h2-class');
    const heading4 = document.querySelector('#id-h2');
    const allInput = document.querySelectorAll('input');
    const bottom = allInput[allInput.length -1];

    console.log(heading);
    console.dir(heading);
    console.dir(heading.id);
    console.dir(heading.textContent);

 //   setTimeout(() => {
  //      heading.textContent = 'Changed from JavaScript!';
  //      heading.style.color = 'red';
  //      heading.style.textAlign = 'left';
  //      heading.style.backgroundColor = '#ccc';
  //      heading.style.padding = '1.5rem';
  //  }, 2000);

    setTimeout(() => {
        addStyleTo(heading2, 'Скрипты подключены!');
    }, 1500);

    setTimeout(() => {
        addStyleTo(heading3, '"Введение и основы" пройдены!', '#CC0033');
    }, 3000);

    const link = heading4.querySelector('a');

    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Click on link', event.target.getAttribute('href'));
        const url =  event.target.getAttribute('href');

        window.location = url;
    });
    
    setTimeout(() => {
        addStyleTo(link,'Этап "Углубление в javaScript"', '#660099');
    }, 4500);


    setTimeout(() => {
       addStyleTo2(bottom, '20px');
    }, 5500);

  function addStyleTo(node, text, color = 'red', fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = 'center';
    node.style.backgroundColor = '#ccccff';
    node.style.padding = '1.5rem';
    node.style.display = 'block';
    node.style.width = '100%';
  };

  function addStyleTo2(node, fontSize) {
   node.style.color = 'red';
    // falsy: '', undefined, null, 0, false
 //  if (fontSaze) {
        node.style.fontSize = fontSize;
  // };
  };

  heading2.onclick = () => {
    if (heading2.style.color === 'red') {
        heading2.style.color = '#000';
        heading2.style.backgroundColor = '#fff';
    } else {
        heading2.style.color = 'red';
        heading2.style.backgroundColor = '#ccccff';
    };
  };

};

