export const HelloWorld = ({user, id, title = 'Hola Mundo'}) => {

    console.log(title)
    //const name = 'Pepe';

    return (
        <>
            <h1>{title}</h1>
            <div>que tal! {user.name} {user.lastName} con el id {id}</div>
        </>
    )
};