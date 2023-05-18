import data from './data/data.json';
import drawTable from './drawTable';
import {
  compareAscendingById,
  compareAscendingByImdb,
  compareAscendingByTitle,
  compareAscendingByYear,
} from './compareFunctions';
import { showArrowMarker, deleteArrowMarker } from './arrowMarker';

document.body.insertBefore(drawTable(data), document.body.firstElementChild.nextElementSibling);
const table = document.querySelector('table');

// ??? Единый интервал не понял, как сделать. Таймауты начинают не успевать за сменой интервалов
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
