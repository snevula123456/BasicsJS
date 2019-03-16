document.getElementById('apitext').addEventListener('click',gettext);

function gettext() {
    fetch('test.txt')
        .then(function(res){
       return res.text();
    })
        .then(function (data) {
           document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        })

}

//Get JSON data

document.getElementById('apijson').addEventListener('click',getjson);
function getjson(){
    fetch('Json.json')
        .then(function (res2) {
           return (res2.json())
        })
        .then(function (data) {
        let output = "";
        data.forEach(function (post) {
             output += `<li>${post.title}</li>
                      <li>${post.body}</li>`;
            document.getElementById('output').innerHTML = output;
        });
        })
        .catch(function (err) {
            document.getElementById('output').innerHTML = err;
        })
}

// GEt fetch api from outside
document.getElementById('apiexternal').addEventListener('click',getexternal);

function getexternal() {
    fetch('https://api.github.com/users')
        .then(function(res){
           return (res.json());
        })
        .then(function(data){
            let output = "";
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
                document.getElementById('output').innerHTML = output;
            });
        })
        .catch(function(err){
            console.log(err);
            document.getElementById('output').innerHTML = err;
        })
}

