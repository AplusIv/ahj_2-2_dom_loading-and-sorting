export function dataStringSort(a, b) {
  if (a.dataset.title > b.dataset.title) return 1; // если первое значение больше второго
  if (a.dataset.title === b.dataset.title) return 0; // если равны
  if (a.dataset.title < b.dataset.title) return -1; // если первое значение меньше второго
  return true;
}

export default function someSort(arr, sorter, ASC = true) {
  if (sorter === 'title') {
    if (ASC) return [...arr].sort(dataStringSort);
    return [...arr].sort(dataStringSort).reverse();
  }
  return [...arr].sort((a, b) => {
    const aData = Number(a.dataset[sorter]);
    const bData = Number(b.dataset[sorter]);
    return (ASC) ? aData - bData : bData - aData;
  });
}
