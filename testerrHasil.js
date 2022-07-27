const kurir = 'JNT';
const fs = require ('fs');
const readlineSync = require ('readline-sync');

readlineSync.question(console.log('Masukkan Resi Anda : '))
console.log(`Kurir yang anda gunakan : ${kurir}`);
console.log('Status Anda : ');