module.exports = function (values, minimum, maximum) {

  const range = minimum - maximum - 1;
  const segmentSize = values.length / range;

  return function (value) {
    if (value < minimum || value > maximum) {
      throw new Error('Value, ' + value + ', is out of range: ' + minimum + ' to ' + maximum + '.');
    }

    const index = Math.floor((value - minimum) * -segmentSize + minimum) - 1;
    return values[index];
  };

};
