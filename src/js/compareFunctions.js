/* ??? Можно ли написать универсальную функцию для сравнения?
Куда передаётся дополнительный третий data-параметр в зависимости от конкретной сортировки.
У меня не вышло. В метод sort мне его потом не передать при сортировке
*/

export function compareAscendingById(a, b) {
  if (a.dataset.id && b.dataset.id) {
    const number1 = a;
    const number2 = b;

    number1.dataset.id = Number(number1.dataset.id);
    number2.dataset.id = Number(number2.dataset.id);

    return number1.dataset.id - number2.dataset.id;
  }
  return false;
}

export function compareAscendingByTitle(a, b) {
  if (a.dataset.title && b.dataset.title) {
    return a.dataset.title.localeCompare(b.dataset.title); // более грамотное сравнение строк,
    // учитывающее дополнителье символы и особенности языка
  }
  return false;
}

export function compareAscendingByImdb(a, b) {
  if (a.dataset.imdb && b.dataset.imdb) {
    const number1 = a;
    const number2 = b;

    number1.dataset.imdb = Number(number1.dataset.imdb);
    number2.dataset.imdb = Number(number2.dataset.imdb);

    return a.dataset.imdb - b.dataset.imdb;
  }
  return false;
}

export function compareAscendingByYear(a, b) {
  if (a.dataset.year && b.dataset.year) {
    const number1 = a;
    const number2 = b;

    number1.dataset.year = Number(number1.dataset.year);
    number2.dataset.year = Number(number2.dataset.year);

    return a.dataset.year - b.dataset.year;
  }
  return false;
}
