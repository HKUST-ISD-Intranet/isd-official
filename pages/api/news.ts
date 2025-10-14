import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
    return open({
        filename: './src/app/my.db',
        driver: sqlite3.Database,
    });
}

async function select() {
    const db = await openDb();
    try {
        const sql = `SELECT * FROM news_events`;
        const results = await db.all(sql);
        return results;
    } catch (error) {
        console.error('Error executing query:', error);
        return []; // Retourne un tableau vide en cas d'erreur
    } finally {
        await db.close(); // Assurez-vous que la connexion à la base de données est fermée
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const people = await select();
    res.status(200).json(people);
}
