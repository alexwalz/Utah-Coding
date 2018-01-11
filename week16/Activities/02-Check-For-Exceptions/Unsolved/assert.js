var assertThrows = function (func, x, y) {
  var threw = false;
  try {
    func(x, y);
  } catch (e) {
    threw = true;
  }
  return threw;
};

var multiply = function (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error("Error: One of your entries was not a number");
  } else return x * y;
};


