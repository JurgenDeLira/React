import PropTypes from "prop-types";

export const HelloWorld = ({user, id, title = 'Hola Mundo', book}) => {

    console.log(title)
    //const name = 'Pepe';

    return (
        <>
            <h1>{title}</h1>
            <div>que tal! {user.name} {user.lastName} con el id {id}</div>
            <div>{ book }</div>
        </>
    );
}

HelloWorld.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

HelloWorld.defaultProps = {
    title: 'Hola mundo por defecto!',
    book: 'UML got a gota'
}