let bookArr = [
    {
        "firstName": "Jow",
        "lastName" : "Roll",
        "age" : 25
    },
    {
        "firstName" : "Miu",
        "lastName" : "Poll",
        "age" : 45
    },
    {
        "firstName" : "iu",
        "lastName" : "oll",
        "age" : 50
    }
]

console.log(bookArr.filter((elem)=> elem.age>30).map((elem)=>{
    return `${elem.firstName} ${elem.lastName}` 
    // temporal literal syntax
}))
// iterate through this array and print full name of the authors whose age is > 30

// ES6

// ES5`


//Q:2
let bookArr1 = [
    {
        "firstName": "Jow",
        "lastName" : "Roll",
        "age" : 25,
        "price" : 500
    },
    {
        "firstName" : "Miu",
        "lastName" : "Poll",
        "age" : 45,
        "price" : 1500
    },
    {
        "firstName" : "iu",
        "lastName" : "oll",
        "age" : 50,
        "price" : 2500
    }
]

// iterate through this array and print avg of the book's price whose authoir age is > 30
























