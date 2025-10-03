const user = {
    username: 'jorge',
    email: 'correo@google.com',
    age: 30,
    ranking: 10,
}


const detail = ({username, email}) => {

    console.log(`El detalle del usuario ${username} con correo ${email}`)
}


detail(user)