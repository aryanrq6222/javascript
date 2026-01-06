function evenorodd(number) {
    if (number % 2 == 0)
    {
        console.log('Even')
    }
    else{
        console.log('Odd')
    }
}

evenorodd(2);
evenorodd(1);


function largernumber(number1, number2) {
    if (number1 > number2){
        console.log(number1)
    }
    else{
        console.log(number2)
    }
}

largernumber(1,2);
largernumber(5, 10);

function findsignofnumber(number){
    if (number < 0)
    {
        console.log('Negative')
    }
    else if( number == 0)
    {
        console.log('Zero')
    }
    else
    {
        console.log('Positive')
    }
}

findsignofnumber(-1);
findsignofnumber(0);
findsignofnumber(1);

function sumofpostivenumbers(number1, number2){
    if (number1 > 0 && number2 > 0)
    {
        console.log(number1 + number2);
    }
    else{
        console.log(0);
    }
}

sumofpostivenumbers(-1, 1);
sumofpostivenumbers(1, 1);

function isnumberdivisibleby3or5(number){
    if (number%3 == 0 || number % 5 == 0)
    {
        console.log(true)
    }
    else{
        console.log(false)
    }
}

isnumberdivisibleby3or5(6);
isnumberdivisibleby3or5(10);
isnumberdivisibleby3or5(7);

function sumtilln(number){
    let sum = 0;
    for(let i =0; i<=number; i++)
    {
        sum+= i;
    }
    console.log(sum);
}

sumtilln(10);

function factorial(number){
    let factorial = 1;
    for(let i =1; i<=number; i++)
    {
        factorial*= i;
    }
    console.log(factorial);
}

factorial(4);
factorial(5);

function numberofdigits(number){
    let totalnumberofdigits = 1;

    while(number >= 10)
    {
        totalnumberofdigits += 1;
        number = number / 10;
    }

    console.log(totalnumberofdigits);
}

numberofdigits(1);
numberofdigits(11);
numberofdigits(399);

function reverseFunction(num) {
    let numberstring = num.toString();
    let reversedStr = '';
    for (let i = numberstring.length - 1; i >= 0; i--) {
        reversedStr += numberstring[i];
    }
    return parseInt(reversedStr);
}

console.log(reverseFunction(12345));
console.log(reverseFunction(8899));

function isprime(number)
{
    let isprime = number > 1;

    for (let i = 2; i < number; i++)
    {
        if (number % i == 0)
        {
            isprime = false;
            break;
        }
    }

    console.log(isprime);
}

isprime(10);
isprime(3);
isprime(1);
isprime(13);
