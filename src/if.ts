// function problem1(a: number): number {
//     if (a > 0) {
//         a += 1;
//     } else if (a < 0) {
//         a -= 2;
//     } else if (a === 0) {
//         a += 10;
//     }
//     return a;
// }

// console.log(problem1(0));

// function problem2(a: number): number {
//     if (a > 0) {
//         a += 1;
//     } else if (a < 0) {
//         a -= 2;
//     }
//     return a;
// }

// console.log(problem2(5));

// function problem3(a: number, b: number, c: number): number {
//     let count = 0;

//     if (a > 0) {
//         count++;
//     }
//     if (b > 0) {
//         count++;
//     }
//     if (c > 0) {
//         count++;
//     }

//     return count;
// }

// console.log(problem3(1, -2, 3));

// function problem4(a: number, b: number, c: number): number {
//     let count = 0;
//     let minus = 0;

//     if (a > 0) {
//         count++;
//     } else if (a < 0) {
//         minus++;
//     }
//     if (b > 0) {
//         count++;
//     } else if (b < 0) {
//         minus++;
//     }
//     if (c > 0) {
//         count++;
//     } else if (c < 0) {
//         minus++;
//     }

//     console.log(`positive: ${count}, negative: ${minus}`);
// }
// problem4(1, -2, 3);

// function problem5(a: number, b: number): number {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(problem5(55, 102));

// function problem5(a: number, b: number): number {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(problem5(55, 102));

// function problem6(a: number, b: number): string {
//     if (a > b) {
//         return `${a}, ${b}`;
//     } else {
//         return `${b}, ${a}`;
//     }
// }

// console.log(problem6(10, 85));

// function problem7(a: number, b: number): string {
//     if (a < b) {
//         return `${a}, ${b}`;
//     } else {
//         return `${a + b}`;
//     }
// }

// console.log(problem7(60, 50));

// function problem8(a: number, b: number): string | number {
//     if (a === b) {
//         return 0;
//     } else {
//         return `${a + b}`;
//     }
// }

// console.log(problem8(10, 5));

// function problem8(a: number, b: number): string | number {
//     if (a > b) {
//         return a;
//     } else if (a < b) {
//         return b;
//     } else {
//         return 0;
//     }
// }

// console.log(problem8(10, 10));

// function problem9(a: number, b: number, c: number): number {
//     if (a <= b && a <= c) {
//         return a;
//     } else if (b <= a && b <= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(problem9(10, 20, 5));

// function findMiddle(a: number, b: number, c: number): number {
//     if ((a > b && a < c) || (a < b && a > c)) {
//         return a;
//     } else if ((b > a && b < c) || (b < a && b > c)) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(findMiddle(10, 20, 15));

// function problem10(a: number, b: number): string {
//     if (a < b) {
//         return `${a}, ${b}`;
//     } else {
//         return `${b}, ${a}`;
//     }
// }

// console.log(problem10(10, 20));

// function maxSumPair(a: number, b: number, c: number): string {
//     if (a + b >= a + c && a + b >= b + c) {
//         return `${a}, ${b}`;
//     } else if (a + c >= a + b && a + c >= b + c) {
//         return `${a}, ${c}`;
//     } else {
//         return `${b}, ${c}`;
//     }
// }

// console.log(maxSumPair(10, 20, 5));

// FOR question

// function problem1(k: number, n: number): void {
//     for (let i = 0; i < n; i++) {
//         console.log(k);
//     }
// }

// problem1(5, 2);

// function problem2(a: number, b: number): void {
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//     }
// }

// problem2(1, 5);

// function problem3(a: number, b: number): void {
//     for (let i = a - 1; i > b; i--) {
//         console.log(i);
//     }
// }

// problem3(5, 1);

// function problem4(price: number): void {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} kg candy = ${(price * i).toFixed(2)} so'm`);
//     }
// }

// problem4(5.2);

// function problem4(price: number): void {
//     for (let i = 0.1; i <= 1; i += 0.1) {
//         console.log(
//             `${i.toFixed(1)} kg candy = ${(price * i).toFixed(2)} so'm`
//         );
//     }
// }

// problem4(5.2);

// function problem4(price: number): void {
//     for (let i = 1.2; i <= 2; i += 0.1) {
//         console.log(
//             `${i.toFixed(1)} kg candy = ${(price * i).toFixed(2)} so'm`
//         );
//     }
// }

// problem4(5.2);

// function problem5(a: number, b: number): void {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     console.log(`Sum: ${sum}`);
// }

// problem5(2, 6);

// function problem6(a: number, b: number): void {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//         sum *= i;
//     }
//     console.log(`Sum: ${sum}`);
// }

// problem6(1, 3);

// function problem7(a: number, b: number): void {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i * i;
//     }
//     console.log(`Sum: ${sum}`);
// }

// problem7(2, 3);

// function problem8(n: number): number {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += 1 / i;
//     }
//     return sum;
// }

// console.log(problem8(10));

// function sumOfSquares(n: number): number {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i * i;
//     }
//     return sum;
// }

// const n = 10;
// console.log(`Sum of squares for n = ${n}: ${sumOfSquares(n)}`);

// function factorial(n: number): number {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// const n = 10;
// console.log(`Factorial for n = ${n}: ${factorial(n)}`);

// Kitob uchun Type

// type Book = {
//     title: string;
//     author: string;
//     pageCount: number;
// };

// const myBook: Book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pageCount: 464,
// };

// function printBookInfo(book: Book): void {
//     console.log(`Book: ${book.title}`);
//     console.log(`Author: ${book.author}`);
//     console.log(`Page Number: ${book.pageCount}`);
// }

// printBookInfo(myBook);

// Foydalanuvchi uchun interface

// interface User {
//     name: string;
//     email: string;
//     password?: string;
// }

// const newUser: User = {
//     name: "Json Statham",
//     email: "ali@example.com",
// };

// console.log(newUser);

// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// console.log(addNumbers(5, 7));

// function wrapInArray<T>(value: T): T[] {
//     return [value];
// }

// console.log(wrapInArray(10));
// console.log(wrapInArray("Hello"));
// console.log(wrapInArray(true));
// console.log(wrapInArray({ name: "Ali", age: 25 }));

// function getEvenNumbers(numbers: number[]): number[] {
//     return numbers.filter((num) => num % 2 === 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(getEvenNumbers(numbers));

// const student: [string, number] = ["Shohjahon niyazov", 18];

// console.log(`student: ${student[0]}`);
// console.log(`age: ${student[1]}`);

// enum WeekDays {
//     Dushanba = "Dushanba",
//     Seshanba = "Seshanba",
//     Chorshanba = "Chorshanba",
//     Payshanba = "Payshanba",
//     Juma = "Juma",
//     Shanba = "Shanba",
//     Yakshanba = "Yakshanba",
// }

// const today: WeekDays = WeekDays.Shanba;

// console.log(`Bugun: ${today}`);

// const person = {
//     name: "Shohjahon",
//     age: 18,
// };

// const job = {
//     position: "Frontend Developer",
//     salary: 5000,
// };

// const mergedObject = { ...person, ...job };

// console.log(mergedObject);


