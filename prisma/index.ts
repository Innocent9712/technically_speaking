// prisma/index.ts
import { PrismaClient as PrismaClientPostgres } from './postgres/postgresclient';
import { PrismaClient as PrismaClientMongo } from './mongo/mongoclient';

export const dbPostgres = new PrismaClientPostgres();
export const dbMongo = new PrismaClientMongo();
