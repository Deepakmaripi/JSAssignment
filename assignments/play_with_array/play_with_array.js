function getEven(arr) {
    list1=[];
    for (var i=0;i<arr.length;i++){
       if (arr[i]%2===0){
           list1.push(arr[i]);
       }
   }
   return list1

}

function multiplyByN(arr, n) {

    for (var j=0;j<arr.length;j++){
        arr[j]=arr[j]*n;
    }
    return arr
}

function removeNthElement(arr, n) {
    arr.splice(n,1);
   return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}