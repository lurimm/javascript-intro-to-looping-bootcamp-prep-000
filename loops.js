function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if (i === 1) {
      return array['I am 1 strange loop.']
    } else {
      return array[`I am ${i} strange loops.`]
    }
  }
}

function whileLoop(number) {
  while (number > 0){
    console.log(--number);
    return 'done';
  }
}
