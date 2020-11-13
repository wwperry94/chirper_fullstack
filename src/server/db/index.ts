import * as mysql from 'mysql';
import { resolve } from 'path';
import chirper from './chirper';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirperapp',
    password: 'Skiisfun123!',
    database: 'chirperdb',
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    })


};

export default {
    chirper
};