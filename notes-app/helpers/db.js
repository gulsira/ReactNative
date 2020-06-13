import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('notes.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, note TEXT NOT NULL, imageUri TEXT);',
            [],
            () => {
                resolve();
            },
            (_, err) => {
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const insertNote = (note, imageUri) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO notes (note, imageUri) VALUES (?, ?);`,
            [note, imageUri],
            (_, result) => {
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const fetchNotes = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM notes`,
            [],
            (_, result) => {
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
            );
        });
    });
    return promise;
}
