// the console will print an error, because we tried to access x inside a block before initializing x in this block
let x = 10;
console.log(x);
{
  let x = 5;
  console.log(x);
}
console.log(x);
