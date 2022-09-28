const fs = require('fs');

// try {
//   const data = fs.readFileSync('./simpsons.json', 'utf8');
//   const jsonData = JSON.parse(data);
//   console.log(jsonData.map(person => `${ person.id } - ${ person.name }`));
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
// }

// ------------------------------------------------------

// function searchSimpsons(id) {
//   const promisse = new Promise((resolve, reject) => {
//     const data = fs.readFileSync('./simpsons.json', 'utf8');
//     const jsonData = JSON.parse(data);
//     const person = jsonData.find(person => Number(person.id) === id);
//     if (person === undefined) reject(`Id não encontrado`);
//     resolve(person);
//   });
//   return promisse;
// }

// async function test () {
//   try {
//     const promisse = await searchSimpsons(11);
//     console.log(promisse);
//   } catch (err) {
//     console.error(err);
//   }
// }

// test();

// ------------------------------------------------------

// function filterSimpsons(id1, id2) {
//   const promisse = new Promise((resolve, reject) => {
//     const data = fs.readFileSync('./simpsons.json');
//     const jsonData = JSON.parse(data);
//     const person = jsonData.filter(person => Number(person.id) !== id1 && Number(person.id) !== id2);
//     resolve(person);
//   });
//   return promisse;
// }

// async function writeData () {
//   try {
//     const promisse = await filterSimpsons(10, 6);
//     fs.writeFileSync('./simpsons.json', JSON.stringify(promisse));
//   } catch (err) {
//     console.error(err);
//   }
// }

// writeData();

// ------------------------------------------------------

// function filterSimpsons(num1, num2) {
//   const promisse = new Promise((resolve, reject) => {
//     const data = fs.readFileSync('./simpsons.json');
//     const jsonData = JSON.parse(data);
//     const person = jsonData.filter(person => Number(person.id) >= num1 && Number(person.id) <= num2);
//     resolve(person);
//   });
//   return promisse;
// }

// async function writeData () {
//   try {
//     const promisse = await filterSimpsons(1, 4);
//     fs.writeFileSync('./simpsonFamily.json', JSON.stringify(promisse));
//   } catch (err) {
//     console.error(err);
//   }
// }

// writeData();

// ------------------------------------------------------

// function filterSimpsons() {
//   const promisse = new Promise((resolve, reject) => {
//     const data = fs.readFileSync('./simpsonFamily.json');
//     const jsonData = JSON.parse(data);
//     jsonData.push({ id: JSON.stringify(jsonData.length + 1), name: 'Nelson Muntz' });
//     resolve(jsonData);
//   });
//   return promisse;
// }

// async function writeData () {
//   try {
//     const promisse = await filterSimpsons();
//     fs.writeFileSync('./simpsonFamily.json', JSON.stringify(promisse));
//   } catch (err) {
//     console.error(err);
//   }
// }

// writeData();

// ------------------------------------------------------

// function filterSimpsons() {
//   const promisse = new Promise((resolve, reject) => {
//     const data = fs.readFileSync('./simpsonFamily.json');
//     const jsonData = JSON.parse(data);
//     const person = jsonData.filter(person => person.name !== 'Nelson Muntz');
//     person.push({ id: JSON.stringify(person.length + 1), name: 'Maggie Simpson' });
//     resolve(person);
//   });
//   return promisse;
// }

// async function writeData () {
//   try {
//     const promisse = await filterSimpsons();
//     fs.writeFileSync('./simpsonFamily.json', JSON.stringify(promisse));
//   } catch (err) {
//     console.error(err);
//   }
// }

// writeData();


