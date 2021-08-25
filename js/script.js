// for (let i = 1; i <= 100; i++)
// {
//     if ( (i%3==0) && (i%5==0) )
//     {
//         console.log("FizzBuzz");
//     }else if (i%3==0)
//     {
//         console.log("Fizz");
//     }else if (i%5==0)
//     {
//         console.log("Buzz");
//     }else
//     {
//         console.log(i);
//     }
// }

for (let i = 1; i <= 100; i++)
{
    if ( (i%3==0) && (i%5==0) )
    {
        document.getElementById('numeri').innerHTML += '<span class="me-2">FizzBuzz</span>';
    }else if (i%3==0)
    {
        document.getElementById('numeri').innerHTML += '<span class="me-2">Fizz</span>';
    }else if (i%5==0)
    {
        document.getElementById('numeri').innerHTML += '<span class="me-2">Buzz</span>';
    }else
    {
        document.getElementById('numeri').innerHTML += '<span class="me-2">' + i + '</span>';
    }
}