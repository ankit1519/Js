const arr=[1,2,3,4,5,6,7,8,9,10]
const arrNums=arr.map((num)=>num+10)
console.log(arrNums);

//chaining
const newNum=arr.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(newNum);