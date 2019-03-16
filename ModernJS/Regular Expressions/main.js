let re;
re = /hello/;
re = /Hello/i; // i is case sensitive
/*
console.log(re.source);*/

/*const result = re.exec('some hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);*/

/*const result = re.test('Hello');
console.log(result);*/

/*const str = 'hello';
const result = str.match(re);
console.log(result);*/

/*const str = 'Hi hello welcome brad';
const result = str.search(re);
console.log(result);*/

const str = 'hello there';
const newstr = str.replace(re,'hi');
console.log(newstr);
