const sayHello = () => {
  console.log('hello world');
};
sayHello();

const single = () => console.log('Single is working');
single();
const some = (name) => console.log(` ${name}`);
some('shyam');

const oneline = () => 'hello';
console.log(oneline());

//Return as object
const obj = () => ({msg:"object"});
console.log(obj());

const users = ['shyam', 'singh', 'nevula'];

/*const namelengths = users.map(function(name){
    return name.length;
});*/

/*const namelengths = users.map((name) => name.length);*/

const namelengths = users.map(name => name.length);
console.log(namelengths);