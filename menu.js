const data = [
    {
     "photo": "Espresso.svg",
     "name": "Espresso",
     "price": "10.000",
     "id": "1"
    },
    {
     "photo": "Coffelatte.svg",
     "name": "Cofee Latte",
     "price": "15.000",
     "id": "2"
    },
    {
     "photo": "cappucino.png",
     "name": "Cappucino",
     "price": "5.000",
     "id": "3"
    },
    {
     "photo": "redvelvet.svg",
     "name": "Red Velvet Latte",
     "price": "33.000",
     "id": "4"
    },
    {
     "photo": "chocorum.svg",
     "name": "Choco Rhum",
     "price": "28.000",
     "id": "5"
    },
    {
     "photo": "blackforest.svg",
     "name": "Black Forest",
     "price": "30.000",
     "id": "6"
    },
    {
     "photo": "chickenkatsu.svg",
     "name": "chicken katsu Dabu-dabu",
     "price": "60.000",
     "id": "7"
    },
    {
     "photo": "salmon.svg",
     "name": "Salmon Truffle Teriyaki",
     "price": "60.000",
     "id": "8"
    },
    {
     "photo": "wiener.svg",
     "name": "Wiener Schnitzel",
     "price": "69.000",
     "id": "9"
    }
   ]


   const y = data.map((p) => p.id )
   console.log(Math.max(...y) + 1)