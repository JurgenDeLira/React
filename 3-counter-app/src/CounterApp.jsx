
export const CounterApp = () => {

    let counter = 0;
    const counterIncrement = () => {
        counter = counter + 1;
        console.log('click!' + counter)
    }

    return <>
    <h2>El valor del contador es {counter }</h2>
    <button onClick={() => {
        counterIncrement()
    }} >incrementar contador +1</button>
    </>
}  