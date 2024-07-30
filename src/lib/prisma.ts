// lib/prisma.ts
import { dbPostgres, dbMongo } from '../../prisma';

const prisma = {
    dbPostgres,
    dbMongo,
};

export default prisma;

