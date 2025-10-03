const paper = {
    product: 'paper',
    price: 100,
    quantity: 10,
}

const invoices = [
    {
    id: 1,
    name: 'Compras de oficina',
    client: {

        name: 'Maria',
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
            paper,
        ]
    },
        {
        id: 2,
        name: 'Compras de computación',
     
        client: {
 
            name: 'Pepe',
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
            paper,
        ]
    }
];

const invoicesName = invoices.map( i => i.name);
console.log(invoices)
console.log(invoicesName)

const invoicesClient = invoices.map( i => i.client.name);

console.log(invoicesClient)

const invoiceById = invoices.find( i=> i.name === 'Pepe')

console.log(invoiceById)

const invoiceFilter = invoices.filter( i => i.id > 1)
console.log(invoiceFilter)

console.log('filter eliminar')
const invoiceDeleted = invoices.filter( i => i.id != 2)
console.log(invoiceDeleted)

const invoiceFilter2 = invoices.filter(i => i.items.includes(paper) )
console.log(invoiceFilter2)

const result = invoices.some(i => i.client.name === 'juan');
console.log(result)