// Day 7 THA(Object Assignment)

// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

var kakashi = {
    name: "Kakashi Hatake",
    rank: "Jounin",
    signature: "Chidori",
};

console.log(kakashi.name);
console.log(kakashi.rank);
console.log(kakashi.signature);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

delete kakashi.rank;
console.log(kakashi);

// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log(Object.keys(kakashi).length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

library.forEach((reader) => {
    console.log(reader.author);
    console.log(reader.title);
    console.log(reader.readingStatus);
});

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

const PI = Math.PI;
let r = 5.45;
let h = 7.9;
let volume = PI * r * r * h;
console.log(volume.toFixed(4));

// 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : 
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

