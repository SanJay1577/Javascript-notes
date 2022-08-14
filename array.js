// Todays concepts are arrays and objects...

const log = (arg) => console.log(arg); 

const arr = [4, 2, 6, 1, 5, 3]; 
// indexes   0  1  2  3  4  5  

// result array
log("initail array "+ arr); 

//accesing an array
log("The index value is " + arr[3]);

// edit or manuplate an array 

//to add a value at the end (push)

arr.push("Sanjay");
log("After push funtionality " + arr); 

//remove the last item from an array
arr.pop(); 
log("After removing last time "+ arr);

//add a value to the front of an array
arr.unshift("deva"); 
log("adding in the front "+ arr);

//remove a value from front 
arr.shift(); 
log("removing the first value "+ arr);

//length of an array
log("the length is " + arr.length)

//join some values 
const result = arr.join("and"); 
 log(result);
 
 // finding the index
 log(arr.indexOf(4));

 //wheather the value is there or not 
 //return true or false
 log(arr.includes(9)); 
 
 // sorting an array
 log("Before sorted array " +  arr); 
 log("After sorting "+ arr.sort());

 //reversing this array
  log("reversed array is "+ arr.reverse()); 
  
  // convert this to a string
    log(arr);
    log(arr.toString())
  
 // Edit in between any index of an arrat (splice)

  log(arr); 
  //remove in between
   arr.splice(2, 3);
   // add a value in between 
   arr.splice(2, 0, "hari", 3, 2);
  log(arr);
  
  //slicing an array
  const slicedValue = arr.slice(0, 2);
  log(arr);
  log(slicedValue);
