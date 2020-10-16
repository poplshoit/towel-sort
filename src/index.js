module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix[0] === undefined) {
      return [];
  }
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
      (i % 2 === 0) ? result = result.concat(matrix[i]): result = result.concat(matrix[i].reverse());
  }

  return result

}