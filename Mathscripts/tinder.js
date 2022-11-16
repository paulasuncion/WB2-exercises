//Variables and dataypes
let profileIDnr = 1241274124198; // BIG INT  /// Auto generated GUID 
let firstName2 = 'Paul'; //string
let age2 =  22; //number
let description = "This is my description of my profile";
let gendertypes = ["Male", "Female", "Non Binary"] // Array
let gender = gendertypes[0];
let hobbies = null;
let interest; //Undifined
const birthdate = new Date(1989, 2, 6); // new Date(Year, Month, Day)
let numberOfLikes = 2500;
let isMatchedWith = ["Beyonce","Rianna","Angelina"];
let profilepictureURI = "https://www.remsey.nl/assets/images/remsey-mailjard.jpg"  // image url
let newMatchesAsTitle = "New matches";
let isSuperLiked = true;
let occupation = 'student';
let company = 'Creative Productions';
let jobscription = `${occupation} at ${company}`;

// How to make an object in 
//const (naamoftheobject)  {
   // variablename: value,
//} /


const profile = {
    id: 1324324,
    firstName: 'Remsey',
    lastName: 'Mailjard',
    birthdate: new Date(1989, 2, 6),
    gender: 'Male',
    isSuperLiked: true
}

const profile2 = {
    id: 13243242,
    firstName: 'Remsey',
    lastName: 'Mailjard',
    birthdate: new Date(1989, 2, 6),
    gender: 'Male',
    isSuperLiked: true
};

// Exercise: Create a function that calculate your age!
// Random number for generating an ID,  Math.Random()

function CreateGuid() {  
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substr(2,8);  
       return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
    }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
 }  
 let myID = createGuid();  
