function  cos(){
    document.calculator.result.value = Math.cos(document.calculator.result.value);
}
function  sin(){
    document.calculator.result.value = Math.sin(document.calculator.result.value);
}
function  tan(){
    document.calculator.result.value = Math.tan(document.calculator.result.value);
}
function square(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,2);
}
function sqrt2(){
    document.calculator.result.value = Math.sqrt(document.calculator.result.value);
}
function sqrt3(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,1/3);
}
function num(value){
    document.calculator.result.value += value;
}
function clear(){
    calculator.result.value = " ";
}
function equal(){
    document.calculator.result.value = eval(document.calculator.result.value);
}
function del() {
    let res = calculator.result.value;
    calculator.result.value = res.slice(0, res.length - 1);
}
function pi(){
    document.calculator.result.value = 3.141592653589793238*(document.calculator.result.value)
}
function e(){
    document.calculator.result.value = 2.718281828459045*(document.calculator.result.value)

}
function ln(){
    document.calculator.result.value = Math.log(document.calculator.result.value)
}
function rad(){
    document.calculator.result.value = document.calculator.result.value*(3.141592653589793238/180);
}
function log(){
    calculator.result.value = Math.log10(calculator.result.value)
}

function fact(){
    let num = calculator.result.value ;
    let facto=1;
    for(let i=num; i>0; i--){
        facto=facto*i;
    }
   
//  return facto;
 document.calculator.result.value = facto();
}

