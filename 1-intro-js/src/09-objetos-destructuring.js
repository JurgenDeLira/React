const user = {
    username: 'jorge',
    email: 'correo@google.com',
    age: 30,
    ranking: 10,
}

//const username = user.username;
//const ranking = user.ranking;
//const age = user.age;

const { username, ranking, age} = user;

console.log(`${username} tiene ${age} de edad`);
console.log(ranking);
