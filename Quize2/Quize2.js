// Declare an array with your name. This array will save the position of each letter Get sum of values in the array above using any of the loops you like, and find the remainder of the sum when it is divided by 4.

//example:

const nada = [14,1,4,1]

let sum = 4;
for(let i=0; i<=nada.length;i++)
sum += nada/sum
console.log("the divided number is : ",sum)




// Based on your remainder in the above question, Choose one of the following APIs.
//Fetch the data and display it in console, using fetch or axios call.






fetch("https://www.balldontlie.io/api/v1/teams")
.then(res => res.json())
.then(data => {
    console.log("print the data",data)
})
.catch(err => {
    console.log("err", err)
    console.log("teams")

})