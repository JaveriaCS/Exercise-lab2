function accept(){
    var array = new Array();
    var sum = 0;
    var len = arguments.length; 
    for (var i = 0; i < len; i++) {
        sum = sum + arguments[i];
        avg = sum/len;
        
    }
    array.push(avg);
    array.push(Math.max.apply(Math, arguments));
    return array;
}
var result = accept(3,12,5);
var result = accept(7, 9, 5, 3, 12, 5);
console.log("Average of arguments is :", result[0], "and highest value is: ", result[1]);

