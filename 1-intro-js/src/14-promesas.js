import { findInvoiceById } from './data/invoices';


findInvoiceById(3)
    .then(console.log)
    .catch(console.error);

//promise.then((json) => {
  //      console.log(json);
    //    console.log('realizada con exito alguna tarea con demora.');

//}).catch((error) => {
  //  console.error(error)
//});