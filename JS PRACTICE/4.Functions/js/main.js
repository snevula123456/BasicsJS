/*Putting some value in function*/

function something(name){
    console.log("The value for the function is :" + name);
}
let n = "Shyam Singh";
something(n);

/*Returning the value from the function*/
function getlength(phrase) {
    console.log("The Given phrase is : " + phrase);
    let l = phrase.length;
    return l;
}

let num = getlength("Something");
console.log(num);

function twopara(num1,num2) {
    /*let m = (console.log("The length is : "+num1.length)+ console.log("The length is : "+num2.length));*/
    let l = num1.length;
    if(typeof num2 !== "undefined"){
        l += num2.length;
    }
    function printboth() {
        return num1 + " ," + num2;
    }
    return printboth();
}
let p1 = "something";
let p2 = "another";
let p3 = twopara(p1,p2);
console.log(p3);

function flexible(cond) {
    /*let h = cond.lounge.length + cond.lounge2.length;*/
    let f = cond.lounge.length;
    if (typeof cond.lounge2 !== "undefined"){
        f += cond.lounge2.length;
    }
    function print() {
        return cond.lounge + " ," + cond.lounge2;

    }
    return print();
}
let j = "This is l string";
let  j2 = "This is j string";

let result = flexible({lounge : j , lounge2 : j2});
console.log(result);

let listofnum = [1,2,3,4,5,6,7,9];

function missingnumber(listofnum){
    let missing = -1;
    for(let i=0;i <= listofnum.length;i++){
        if(listofnum.indexOf(i) === -1){
            missing = i;
        }
    }
    return missing;

}
let resu = missingnumber(listofnum);
console.log(resu);





