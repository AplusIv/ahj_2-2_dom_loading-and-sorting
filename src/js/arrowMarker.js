export function showArrowMarker(marker, table, th) {
  const cell = [...table.querySelector('tr').children].find((element) => element.textContent === th);
  cell.textContent += ` ${String.fromCharCode(marker)}`;
}

export function deleteArrowMarker(marker, table) {
  const re = ` ${String.fromCharCode(marker)}`;
  if ([...table.querySelector('tr').children].find((element) => new RegExp(re).test(element.textContent))) {
    const cell = [...table.querySelector('tr').children].find((element) => new RegExp(re).test(element.textContent)); // Нахожу нужную строку через сопоставление с регуляркой
    cell.textContent = cell.textContent.replace(re, '');
  }
}
