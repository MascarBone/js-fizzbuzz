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
    /*
    // Condizione per verificare di essere al primo valore della riga.
    // Con il controllo i==1, il primo inserimento sarà sempre un offset-1
    // Con il controllo (i-1)%10==0 verifico che ci troviamo ad un multiplo di 10,
    // inserendo un altro offset precisamente dopo la decima colonna

    con gli offset c'è qualcosa di non chiaro sul fuzionamento con i margini, in caso utilizzare justify-content-center sulla row

    if ( i==1 || (i-1)%10==0 )
    {
        document.getElementById('numeri').innerHTML += '<span class="offset-1"></span>';
    }
    */
    
    // Condizione per controllare di essere all'inizio del condice HTML per inserire il primo spazio vuoto
    if ( i==1)
    {
        document.getElementById('numeri').innerHTML += '<span class="col-1"></span>';
    }
    // Condizione che ogni 10 valori inseriti, crea due spazi vuoti per allinearli con il resto della tabella
    if ( i > 1 && (i-1)%10==0 )
    {
        document.getElementById('numeri').innerHTML += '<span class="col-1"></span>';
        document.getElementById('numeri').innerHTML += '<span class="col-1"></span>';
    }

    // Serie di Condizioni per verificare che i numeri siano multipli di 3 e 5, o nel caso di uno o l'altro
    if ( (i%3==0) && (i%5==0) )
    {
        document.getElementById('numeri').innerHTML += '<span class="col-1">FizzBuzz</span>';
    }else if (i%3==0)
    {
        document.getElementById('numeri').innerHTML += '<span class="col-1">Fizz</span>';
    }else if (i%5==0)
    {
        document.getElementById('numeri').innerHTML += '<span class="col-1">Buzz</span>';
    }else
    {
        document.getElementById('numeri').innerHTML += '<span class="col-1">' + i + '</span>';
    }
}