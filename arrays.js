var arr = [10, 20, 30, 40, "lorem Ipsum", "is a"];
var sliced1 = arr.slice(1,4);
console.log(arr, "original");
console.log(sliced1);

var arr1 = [5, 10, 15, 20, 25, "simply"];
var min = arr1.slice(2, -1);
console.log(arr1);
console.log(min);

var arrSplice = ["lorem imsum", 2, 4, 6, 8, 10, "is a simply"];
var spliced1 = arrSplice.splice(3, 2);
console.log(arrSplice);
console.log(spliced1);
 
 var arrSplice1 = ["why", "you", "are", "so", "beautiful"];
 var spliced2 = arrSplice1.splice(0, 1, "smile");
 console.log(arrSplice1);

 var arrs2 = ["life", "is", "so", "amazing"];
 var sp3 = arrs2.splice(5, 0, "just", "smile");
 console.log(arrs2);

 var arrs3 = [1, 2, 3, 4, 5, 6];
 var sp4 = arrs3.splice(-6, 0, 0, 10, 20);
 console.log(arrs3);