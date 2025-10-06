import { invoiceById } from './data/invoices';

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = invoiceById(2);
        if (result){
            resolve(result);
        } else {
            reject('error: no existe la factura por el id!')
        }
        
    }, 2500);
});

promise
    .then(console.log)
    .catch(console.error);
    
//promise.then((json) => {
  //      console.log(json);
    //    console.log('realizada con exito alguna tarea con demora.');

//}).catch((error) => {
  //  console.error(error)
//});