const posts = [
    {title:'post one',body:'This is post One'},
    {title:'post two',body:'This is post two'}
];

function createposts(post,callback){
    setTimeout(function() {
        posts.push(post);
        callback();
    },2000);
};

function getposts(){
    setTimeout(function () {
        let output = '';
        posts.forEach(function (posts) {
        output += `<li>${posts.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

createposts({title:'post three', body:'this is post three'},getposts);
