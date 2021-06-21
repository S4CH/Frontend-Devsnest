// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// false
// True

function is_array(a) {
    if (Array.isArray(a)) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));








// Write a JavaScript function to clone an array
// Test Data :
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(a) {
    const b = a;
    return b;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(a, n=1) {
    const b = [];

    if(a.length < n) {
        return a;
    }

    for (let i = 0; i < n; i++) {
        b.push(a[i]);
    }
    return b;
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : 
const myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


function joinArray(a) {
    let s = a.join(",")
    return s;
}

console.log(joinArray(myColor))


//  Write a JavaScript program to find the most frequent item of an array
// Sample array : 
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function countMax(a) {
    let count = {}

    a.forEach((el) => {
        if (!(el in count)) {
            count[el] = 0;
        }
        count[el] += 1;
    })

    let c = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    return `${c} (${count[c]} times)`;
}

console.log(countMax(arr1))