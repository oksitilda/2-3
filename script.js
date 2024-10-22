// Задание 1: Определения операторов и операндов
// Инструкция: В каждой строке кода ниже найдите операторы и операнды,
// отметьте их в комментариях.
// let x = 5 + 10 * 2; // Найдите все операторы и операнды
// 5. 10. 2 операнды
// +, * операторы
// let isValid = (x > 10) && (x < 30); // Найдите все операторы и операнды 
// >,&&,< операторы
// х, 10, 30 операнды
// x++; // Найдите оператор и операнд
// х операнд
// ++ оператор
// delete obj.prop; // Найдите оператор и операнд
// delete оператор
// Задание 2: Арифметические операторы
// Инструкция: Напишите программу, которая вычисляет и выводит 
//на экран результаты следующих операций:
//1.	Сложение двух чисел.
//let a = 1;
//let b = 2;
//let sum = a+b
//console.log (sum)
//2.	Разность двух чисел.
let c = 3;
let d = 4;
let e = c-d
console.log (e)
//3.	Произведение двух чисел.
let q = 5;
let w = 6;
let r = q*w
console.log (r)
//4.	Деление двух чисел.
let t = 7;
//let y = 8;
//let u = t/y
//console.log (u)
//5.	Остаток от деления двух чисел.
let i = 21;
let o = 9;
let p = i%o
console.log (p)
//6.	Возведение числа в степень.
let s = 5;
let f = 6;
let g = q**w
console.log (g)
//Задание 3: Бинарные и унарные операторы
//Инструкция: Рассмотрите следующий код и объясните, 
//какие операторы являются бинарными, а какие унарными.
//let a = 10;
//let b = -a; // Объясните, что происходит
//это бинарный оператор, т.к применяется ко 2 операндам
// a++; // Какой это оператор и как он работает? 
//Инкремент (++): Увеличивает значение переменной на 1 Может использоваться как
//префиксный (увеличивает до использования) и как постфиксный (увеличивает после
//использования).
//let c = a + b; // Какие здесь операторы?
//сложения
//Задание 4: Операторы проверки отношений
//Инструкция: Напишите код, который будет сравнивать два числа и выводить
// сообщения о том, какое из них больше, меньше или равны друг другу.
// Напишите код для сравнения и вывода сообщений
let x = 15; 
let y = 20;
console.log(x>=y);
console.log(x<=y);
//Задание 5: Проверка на равенство и неравенство
//Инструкция: Определите результат выполнения следующих выражений.
// Объясните, почему результат таков.
//5 == '5'; // Объясните результат
//это нестрогое равенство, операнды будут равны, ответ TRU
//5 === '5'; // Объясните результат
//это строгое равентво операнды по знечению и типу не равны, ответ false
//null == undefined; // Объясните результат
//обычное равенство оно не отличает ноль от др.оперенда, ответ tru
//null === undefined; // Объясните результат
//0=0
//Задание 6: Оператор
//Инструкция: Используя оператор in ,
//проверьте наличие ключа в объекте. Объясните результат.
let user = { name: 'John', age: 30
};
console.log('name' in user); // Результат и объяснение 
//true, т.к имя присутствует
console.log('email' in user); // Результат и объяснение
//false, т.к нет эл.почты
//Задание 7: Оператор присваивания и комбинирование с другими операторами
//Инструкция: Преобразуйте следующие выражения
//с использованием комбинированных операторов присваивания:
let a = 10;
//a = a + 5; // Преобразуйте 
console.log(a+=5);
//a = a * 2; // Преобразуйте
console.log(a*=5);
//a = a - 3;  // Преобразуйте
console.log(a-=5);
//Задание 8: Логические операторы
//Инструкция: Напишите код, который использует логические операторы	
//и	для проверки нескольких условий.
//let isAdmin = true; 
//let isLoggedIn = false;
//let canViewPage  = isAdmin && isLoggedIn; // Объясните результат false
//let hasPermission = isAdmin || isLoggedIn; // Объясните результат tru
//let isGuest = !isLoggedIn; // Объясните результат tru
//Задание 9: Тернарный оператор
//Инструкция: Используйте тернарный оператор для того,
//чтобы вывести сообщение "Добро пожаловать", если переменная isLoggedIn истинна,
//и "Вход запрещен",если она ложна.
let isLoggedIn = 111;
console.log(isLoggedIn  === 111 ? "Добро пожаловать" : "Вход запрещен")
//адание 10: Оператор typeof и оператор delete
//Инструкция: Используя оператор typeof , определите типы данных 
//для следующих значений и удалите свойство из объекта с помощью оператора delete
console.log(typeof 123); // Определите тип число
console.log(typeof 'Hello'); // Определите тип строка
console.log(typeof undefined); // Определите тип спец.значение

let car = { make: 'Toyota',
model: 'Corolla'
};
delete car.model; 
console.log(car)
// Удалите свойство и проверьте, 
//удалилось ли оно console.log(car); // Проверьте объект
// ответ - make: 'Toyota'
//Задание 11: Практика с несколькими операторами
//Инструкция: Создайте простую программу, 
//которая принимает два числа, выполняет с 
//ними арифметические операции и использует
// операторы сравнения, логические операторы, 
//а также выводит результаты с помощью тернарного оператора.
let num1 = 10;
let num2 = 20;
// Выполните несколько арифметических операций
let num3 = num1+num2;
let num4 = num1*num2;
//console.log(num3);
//console.log(num4);
// Выполните сравнение
// Используйте логические операторы
//num1 &&= false;
//num2 II= true;
// Используйте тернарный оператор для вывода результата
console.log(num1 === 10 ? "десять" : "не правильно")
