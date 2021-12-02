// Question 1

// check if the given number is prime or not


function isPrime(n) {
    
    for (let i = 2; i * i <= n; i++){
        if(n%i==0)
        {    console.log(n+" "+"is Not a Prime number");
            return false ;
        }
    }
    console.log(n+" "+"is a Prime number");
    return n > 1;
}

console.log(isPrime(17));