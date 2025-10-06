import { invoiceById } from './data/invoices';

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = invoiceById(3);
        console.log(result);
        //console.log('realizando alguna tarea con demora.')
    }, 2500);
});

