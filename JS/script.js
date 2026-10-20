
const prices = [150, 0, 45, 320, 0, 85];
let total = 0;

for (let i = 0; i < prices.length; i++) {
    if (prices[i] === 0) {
        continue;
    }

    total += prices[i] * 1.2;
}

total = Number(total.toFixed(2));

console.log("Сума чека з ПДВ:", total, "грн");

const promoCode = prompt("Введіть промокод:");

let digits = 0;
let letters = 0;
let valid = true;

for (const char of promoCode) {
    if (char === "-") {
        continue;
    }

    if (char >= "0" && char <= "9") {
        digits++;
    } else if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
        letters++;
    } else {
        valid = false;
        break;
    }
}

if (valid) {
    console.log("Промокод правильний");
    console.log("Кількість цифр: ", digits);
    console.log("Кількість латинських літер: ", letters);
} else {
    console.log("Помилка зчитування промокоду!");
}

let balance = 380;
let discount = 0;
const step = 50;
const maxDiscount = total * 0.5;

while (balance >= step && discount + step <= maxDiscount) {
    balance -= step;
    discount += step;
}

const finalTotal = Number((total - discount).toFixed(2));

console.log("Сума до сплати:", finalTotal, "грн");

let payment;
let validPayment;

do {payment = prompt(`До сплати ${finalTotal} грн. Введіть суму готівки:`);

    const amount = Number(payment);

    validPayment =
        payment !== null &&
        payment.trim() !== "" &&
        Number.isFinite(amount) &&
        amount >= finalTotal &&
        amount >= 0;

    if (validPayment) {
        payment = amount;
    } else {
        alert("Помилка! Введіть коректну суму, не меншу за чек.");
    }
} while (!validPayment);

console.log("Отримано готівки:", payment, "грн");


let change = Number((payment - finalTotal).toFixed(2));

const banknotes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

console.log("Видача решти:", change, "грн");

let i = 0;

while (i < banknotes.length) {
    const note = banknotes[i];
    const count = Math.floor(change / note);

    if (count > 0) {
        console.log(`Купюр номіналом ${note} грн: ${count} шт.`);
        change = Number((change % note).toFixed(2));
    }

    i++;
}

console.log("Обслуговування завершено!");
