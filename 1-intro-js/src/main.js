
const invoices = [
    {
    id: 1,
    name: 'Compras de oficina',
    client: {

        name: 'Jhon',
        lastName: 'Doe',

        },
        items: [//Esto es un array
            {//Esto es un objeto
                product: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'mouse',
                price: 200,
                quantity: 1
            },
            {
                product: 'paper',
                price: 100,
                quantity: 10
            },
        ]
    },
        {
        id: 2,
        name: 'Compras de computación',
     
        client: {
 
            name: 'Jhon',
            lastName: 'Doe',
 
        },
        items: [//Esto es un array
            {//Esto es un objeto
                product: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'screen 17',
                price: 800,
                quantity: 1
            },
            {
                product: 'cpu intel',
                price: 1000,
                quantity: 10
            },
        ]
    },
        {
        id: 3,
        name: 'Compras de papeleria',

        client: {
   
            name: 'Jhon',
            lastName: 'Doe',
      
        },
        items: [//Esto es un array
            {
                product: 'pencil',
                price: 50,
                quantity: 1
            },
            {
                product: 'paper',
                price: 100,
                quantity: 10
            },
        ]
    }
];

const invoicesName = invoices.map( i => {
    return i.name; 
});
console.log(invoicesName)