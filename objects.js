// Objects have keys and values

const log = (arg) => console.log(arg); 

const demo = [
    {name: "Sanjay"}, 
    {name: "Sowmiya"},
    {name :"Hari"},
    {name:"Deva"},
    ]; 
// accessing the nested array of objects
log(demo[3].name); 


const obj = {
    firstname : "Sanjay",
    lastname: "ravi",
    isAccessed: true,
    age : 25,
}

const obj2 = {
    firstname : "Sowmiya",
    lastname: "Ramesh",
    isAccessed: false,
    age : 25,
}; 


//initialized the object
log(obj); 

//acces a particular value
log(obj.lastname);

// manuplate a object 
obj.age = 50; 
log(obj); 

//delete an object 
delete obj.isAccessed; 
delete obj.age;
log(obj);

//Passing a reference between two objects
// const newObejct = Object.assign(obj2, obj)
// log(newObejct); 

//accesing the keys 
log("Keys of the object "+ Object.keys(obj2)); 

//accesing the values of the obeject
log("values of the object " + Object.values(obj2)); 

//seal and freeze 
//seal => able to edit but cannot delete
log(obj2);
Object.seal(obj2); 
delete obj2.age;
obj2.age = 50;
log(obj2);

// freeze -> cannot edit or delete
Object.freeze(obj2); 
obj2.age = 75; 
log(obj2); 



