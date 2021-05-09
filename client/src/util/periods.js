const months = [
  "",
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

let periods = [2019, 2020, 2021].map((year) => {
  const array = [];
  for (let month of months) {
    array.push({
      description: `${year}/${month}`,
      value: `${year}/${months
        .indexOf(month)
        .toLocaleString("en-US", { minimumIntegerDigits: 2 })}`,
    });
  }
  return array;
});

periods = [...periods[0],...periods[1],...periods[2]]

export default periods