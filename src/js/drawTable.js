export default function drawTable(data) {
  const table = document.createElement('table');
  const thRow = document.createElement('tr');
  table.appendChild(thRow);
  for (const th of Object.keys(data[0])) {
    const thElement = document.createElement('th');
    thElement.textContent = th;
    thRow.appendChild(thElement);
  }

  for (const trContent of data) {
    const tr = document.createElement('tr');
    for (let i = 0; i < Object.entries(trContent).length; i += 1) {
      const [key, value] = Object.entries(trContent)[i];
      tr.dataset[key] = value;

      if (tr.dataset.imdb) {
        tr.dataset.imdb = Number(tr.dataset.imdb).toFixed(2);
      }
      tr.innerHTML = `<td>${tr.dataset.id}</td><td>${tr.dataset.title}</td><td>imdb: ${tr.dataset.imdb}</td><td>(${tr.dataset.year})</td>`;
    }
    table.appendChild(tr);
  }
  return table;
}
