import data from './data/data.json';
import drawTable from './drawTable';

import someSort from './compareFunctions';
import { showArrowMarker, deleteArrowMarker } from './arrowMarker';

document.body.insertBefore(drawTable(data), document.body.firstElementChild.nextElementSibling);
const table = document.querySelector('table');

const rows = table.querySelectorAll('tr');

let counter = 0;
let switcher = true;

const filters = ['id', 'title', 'imdb', 'year'];

setInterval(() => {
  const filterIndex = Math.floor((counter / filters.length) * 2);
  if (counter < 8) {
    const sorted = someSort([...rows].slice(1), filters[filterIndex], switcher);
    for (const row of sorted) {
      table.appendChild(row);
    }

    deleteArrowMarker(8593, table);
    deleteArrowMarker(8595, table);

    switch (switcher) {
      case true: showArrowMarker(8593, table, filters[filterIndex]);
        break;
      default: showArrowMarker(8595, table, filters[filterIndex]);
        break;
    }

    counter += 1;
    /* console.log('index = ' + filterIndex);
    console.log('filter = ' + filters[filterIndex]);
    console.log('switcher = ' + switcher);
    console.log('counter = ' + counter); */
    if (switcher) {
      switcher = false;
    } else {
      switcher = true;
    }

    if (counter === 8) {
      counter = 0;
    }
  }
}, 2000);
