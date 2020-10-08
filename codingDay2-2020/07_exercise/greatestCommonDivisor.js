function generalizedGCD() {

    let numbers = ["16", "24", "64"];

    let gcd = function(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)
    while (a != b) {
        if (a > b) a -= b
        else b -= a
    }
    return a
    }

    let gcdNumbers = function(numbers) {
    let gcdres = gcd(numbers[0], numbers[1])
    for (let i=3; i<numbers.length; i++) {
        gcdres = gcd(gcdres, numbers[i])
    }
    return gcdres
    }

    console.log(gcdNumbers(numbers)) 
}