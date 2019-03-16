const http = new easyHTTp;

// create Data
const data = {
    title : 'custom post',
    body: 'this is a custom post',
    add : 'something is added',
    body2: 'this is body 2'
};
// create Post
/*http.post('https://jsonplaceholder.typicode.com/posts',data,function(err, post){
    if(err) {
        console.log(err);
    }else {
        console.log(post);
    }
});*/

// Update Post
/*http.put('https://jsonplaceholder.typicode.com/posts/5',data,function (err,post) {
if(err){
    console.log(err);
}else {
    console.log(post);
}
});*/

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});