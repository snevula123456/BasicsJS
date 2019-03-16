document.getElementById('butt').addEventListener('click',customer);

function customer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json',true);

    xhr.onload = function(e){
      if(this.status===200){
          const customer = JSON.parse(this.responseText);
         const output = `
          <ul>
            <li>${customer.ID}</li>
             <li>${customer.Name}</li>
             <li>${customer.Company}</li>
             <li>${customer.Area}</li>
          </ul>`;
          document.getElementById('customer').innerHTML = output;
      }
    };
    xhr.send();
    e.preventDefault();
};

document.getElementById('butt2').addEventListener('click',datas);
function datas(){
const xhr = new XMLHttpRequest();
xhr.open('GET','customers.json',true);
xhr.onload = function (e) {
    if(this.status === 200){
        const customers = JSON.parse(this.responseText);
        let output = "";
        customers.forEach(function (customers) {
             output += `
            <ul>
            <li>${customers.ID}</li>
            <li>${customers.Name}</li>
            <li>${customers.Company}</li>
            <li>${customers.Area}</li>
            </ul>
            `;
            document.getElementById('customers').innerHTML = output;
        });
    }
    e.preventDefault();
 }
xhr.send();
}