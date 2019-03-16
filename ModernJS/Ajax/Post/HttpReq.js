function easyHTTp(){
    this.http = new XMLHttpRequest();
}

// Post Request

/*easyHTTp.prototype.post = function (url, data, callback) {

    this.http.open('POST',url, true);

    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function(){
        callback(null,self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};*/

// Put Request
/*easyHTTp.prototype.put = function (url, data, callback) {

    this.http.open('PUT',url, true);

    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function(){
        callback(null,self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};*/


// Delete Request
easyHTTp.prototype.delete = function(url,callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, 'Post');
        } else {
            callback('Error:' + self.http.status);
        }
    }

    this.http.send();
};

