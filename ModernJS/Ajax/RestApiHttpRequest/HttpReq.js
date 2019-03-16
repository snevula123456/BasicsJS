function easyHTTP(){
    this.http = new XMLHttpRequest();
}
easyHTTP.prototype.get = function (url,callback) {
  this.http.open('GET', url, true);
    let self = this;
  self.http.onload = function() {
      if(self.http.status === 200){
          callback(null ,self.http.responseText);
      }else {
          callback('Error' + self.http.status);
      }
  };
  this.http.send();
};
