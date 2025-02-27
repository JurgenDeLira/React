

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

//const invoice2 = invoice;
const invoice2 = { ...invoice }; // ...spread se esparce cada atributo en esta nueva instancia
                                 // Con esto estamos clonando la factura original en este objeto (por eso la llave {})
                                 // o sea tendrá todos los atributos del original arriba

const result = invoice === invoice2; // == para evaluar una expresión booleana
                                    // === significa que es identico

if (result){
    console.log(result);
} else {
    console.log('no son iguales');
}

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);