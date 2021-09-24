// theres 3 way to declare a function that will return a promises

// normal function with implicited return promise
function testOne () {
    return new Promise(() => {

    })
}


// using async way 1
async function testTwo() {
    // this will automatic return a promise
}

// using async way 2
const testThree = async () => {
    // if theres some throw, it will return a rejected promise
    // throw "error";

    // this will automatic return a promise
    return 'data to be returned'; // this will be a promised fullfiled / resolved
}

// using the way2, we receive a promise with data
// we can use that data just like we see previosly

testThree().then((data) => {
    console.log(data); // this will print 'data to be returned' string
})

const login = async (username, password) => {
    if (!username || !password) throw "no login information";
    if (password === '1234') return "welcome " + username;
    throw "invalid username / password"
}

login('name', '12345')
    .then(msg => {
        console.log('logged in!');
        console.log(msg);
    })
    .catch(err => {
        console.log('Oh no, oh no, oh no no no');
        console.log(err);
    })

