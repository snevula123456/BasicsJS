class EasyHTTp {
    // Make get HTTP Request
    /*get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .then(err => reject(err))
        })

    }*/
// make post Request
    post(url,data){
        return new Promise((resolve,reject) => {
        fetch(url,{
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
