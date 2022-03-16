function isUrl(text) {
  if (text.match(/^https?:\/\/\S+$/)){
    console.log('true');
    return true;
  }
  else{
    console.log('false');

    return false;
  }
}
isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false

function fields(text) {
  return text.split(/[ \t,]+/);
}

console.log(fields('Pete,201,Student'));
console.log(fields("Pete \t 201     ,    TA"));
console.log(fields("Pete \n 201"));

function mysteryMath(equation){ 
  return equation.replace(/[+\-*\/]/g, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1');

function danish(string) {
  return string.replace(/\b(apple|cherry|blueberry)\b/, 'danish' );
}

console.log(danish('An apple a day keeps the doctor away'));
console.log(danish('My favorite is blueberry pie'));
console.log(danish('The cherry of my eye'));
console.log(danish('apple. cherry. blueberry.'));
console.log(danish('I love pineapple'));

function formatDate(input) {
  return input.replace((/(\d{4})\-(\d{2})\-(\d{2})/),"$1.$2.$3" )
  .replace(/(\d{4})\/(\d{2})\/(\d{2})/,'$1.$2.$3')
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)