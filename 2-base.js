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
    console.log(parseFloat(stringFloat) + 2); // // получим 44,42
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