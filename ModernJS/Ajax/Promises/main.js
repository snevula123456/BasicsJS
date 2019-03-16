//Call Back Function
/*const posts = [
    {title: 'first' , body: 'This is body 1'},
    {title: 'second' , body:'THis is body 2'}
];

function Createfunction (post,callback) {
    setTimeout(function(){
    posts.push(post);
    callback();
    },2000);
};

function getpost(){
setTimeout(function () {
    let output = '';
    posts.forEach(function(post){
        output += `<li>${post.title} : ${post.body}</li>`;
    });
    document.body.innerHTML = output;
},1000);
}

Createfunction({title:'Third', body: 'this is third body'},function(){
    getpost();
});*/

// Promises

const posts = [
    {title: 'first' , body: 'This is body 1'},
    {title: 'second' , body:'THis is body 2'}
];

function Createfunction (post) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            const error = "";
            if(!error){
                resolve();
            }else{
                reject('Error Something went wrong')
            }
        },2000);
    });
    }
function getpost(){
    setTimeout(function () {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title} : ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

Createfunction({title:'Third', body: 'this is third body'})
    .then(getpost).catch(function (err) {
    console.log(err);
});
