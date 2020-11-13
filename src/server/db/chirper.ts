import { Query } from './index';

const allChirps = async () =>
    Query('SELECT Chirps.*, Users.name FROM Chirps JOIN Users ON Users.id = Chirps.userid ORDER BY Chirps.id DESC'
    );

const getChirp = async (id: string) =>
    Query(
        'SELECT Chirps.*, Users.name FROM Chirps JOIN Users ON Users.id = Chirps',
    );

const postChirp = async (userid: string, content: string) =>
    Query(
        'INSERT into chirps(userid, content) values (?,?)',
        [userid, content]
    );

const editChirp = async (content: string, id: string) =>
    Query(
        'UPDATE Chirps SET content = ? WHERE id = ?',
        [content, id]
    );

const deleteChirp = async (id: string) =>
    Query(
        '',
        []
    );

export default {
    allChirps,
    getChirp,
    postChirp,
    editChirp,
    deleteChirp
};