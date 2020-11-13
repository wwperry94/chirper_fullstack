// import { Query } from './index';

// const allUsers = async () =>
//     Query('SELECT Chirps.*, Users.name FROM Chirps JOIN Users ON Users.id = Chirps.userid ORDER BY Chirps.id DESC'
//     );

// const getUser = async (id: string) =>
//     Query(
//         'SELECT Chirps.*, Users.name FROM Chirps JOIN Users ON Users.id = Chirps',
//     );

// const postUser = async (userid: string, name: string) =>
//     Query(
//         'INSERT into chirps(userid, name) values (?,?)',
//         [userid, name]
//     );

// const editUser = async (name: string, id: string) =>
//     Query(
//         'UPDATE Chirps SET name = ? WHERE id = ?',
//         [name, id]
//     );

// const deleteUser = async (id: string) =>
//     Query(
//         '',
//         []
//     );

// export default {
//     allUsers,
//     getUser,
//     postUser,
//     editUser,
//     deleteUser
// };