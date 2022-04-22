const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const gol = (a) => {
  if (a > 0) {
    return 'yes';
  } else {
    return 'no';
  }
};

const z = (a, b, c, d) => {
  const p = c(a, b);
  return d(c(a, b));
};

const a = z(1, 2, add, gol);
console.log(a);
