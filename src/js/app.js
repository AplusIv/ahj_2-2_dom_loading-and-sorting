import drawTable from './drawTable';

import {
  compareAscendingById,
  compareAscendingByImdb,
  compareAscendingByTitle,
  compareAscendingByYear,
} from './compareFunctions';

import { showArrowMarker, deleteArrowMarker } from './arrowMarker';

/* ??? Мне пришлось менять входящие данные, так как линтер не пропускал
сначала двойные ковычки в ключах, а потом и просто ковычки.
Правильно сделал?
*/
const jsonData = JSON.stringify([
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
]);
console.log(jsonData);

const dataArr = JSON.parse(jsonData);

document.body.appendChild(drawTable(dataArr));
const table = document.querySelector('table');

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingById);
  for (const row of sorted) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8593, table, 'id');
}, 2000);

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingById); // По убыванию
  const reversed = [sorted[0], ...sorted.slice(1).reverse(sorted)];
  for (const row of reversed) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8595, table, 'id');
}, 4000);

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingByTitle);
  for (const row of sorted) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8593, table, 'title');
}, 6000);

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingByTitle); // По убыванию
  const reversed = [sorted[0], ...sorted.slice(1).reverse(sorted)];
  for (const row of reversed) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8595, table, 'title');
}, 8000);

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingByImdb);
  for (const row of sorted) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8593, table, 'imdb');
}, 10000);

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingByImdb); // По убыванию
  const reversed = [sorted[0], ...sorted.slice(1).reverse(sorted)];
  for (const row of reversed) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8595, table, 'imdb');
}, 12000);

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingByYear);
  for (const row of sorted) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8593, table, 'year');
}, 14000);

setTimeout(() => {
  const sorted = [...table.querySelectorAll('tr')].sort(compareAscendingByYear); // По убыванию
  const reversed = [sorted[0], ...sorted.slice(1).reverse(sorted)];
  for (const row of reversed) {
    table.appendChild(row);
  }

  deleteArrowMarker(8593, table);
  deleteArrowMarker(8595, table);
  showArrowMarker(8595, table, 'year');
}, 16000);
