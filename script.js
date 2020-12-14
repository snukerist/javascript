var money = prompt("Ваш бюджет на месяц?");  //задание 2 вопрос про унарный "+" перед prompt, почему он не нужен?
var time = prompt("Введите дату в формате YYYY-MM-DD");  //задание 2

var costItem = prompt("Введите обязательную статью расходов в этом месяце");  //задание 4
var howMuch = prompt("Во сколько обойдется?");  //задание 4

var budget;
var appData = {   //задание 3
    budget: money,
    timeData: time,
    expenses: {     //задание 4
            costItem: howMuch
            },
    optionalExpenses: {},
    income: [],
    savings: false

};

alert("Ваш бюджет на день: " + appData.budget/30); //задание 5

console.log(appData.budget/30); //задание 6