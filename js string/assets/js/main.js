
//     var arr=["Eli","Memmedeli","Huseyneli", "Eliehmed" ,"Ayten", "Sevinc"];
//     var search=/eli/g;
//     // var count=0;
//     // for (var i=0; i<array.length; i++)
//     // {
//     //     if (arr[i]==="eli"){
//     //     count++;
//     //     }
//     // }
//     var counter=arr.filter(function(val)) {
//         return val===search;
//     }

// console.log(counter);



let result=text.includes("eli", "memmedli", "ehmed");
var count=0;
for (var i=0; i<text.length ;i++) {
    if (text[i]==="eli"){
        count++;
    }
}
console.log (count);