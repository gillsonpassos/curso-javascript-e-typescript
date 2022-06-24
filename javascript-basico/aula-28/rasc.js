// https://developer.mozilla.org/pt-BR/docs/web/javascript/Reference/Global_Objects/date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
const data = new Date(2022, 5, 24, 19, 56);
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); // Mês começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia semana", data.getDay()); // 0 é - Domingo - e - 6 é Sábado
console.log(data.toString());
//console.log(Date.now());
