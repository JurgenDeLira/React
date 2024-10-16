

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20,
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
    ],
    total: function () {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price*item.quantity;
        });
        return total;
    },
    greeting: function (){
        return `Hola ${this.client.name}`; // el this no funciona en lambda
        // en lambda o sea => tiene que ser invoice en vez de this 
        //y en vez de function(){ esto () => {
    }
};

console.log(invoice.company?.name);
console.log(invoice.client?.address?.street);
if(invoice.company?.name){
    console.log('perfecto!!!')
} else {
    console.log('no viene la empresa')
};