const http = new EasyHTTp;

/*
http.get('https://api.github.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));*/

const data = {
    name : 'shyam',
    email: 'snevula123@gmail.com'
}
// Post Request
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data => console.log(data))
.catch(err => console.log(err));
console.log('Post is working');
