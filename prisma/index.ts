// prisma/index.ts
import { PrismaClient as PrismaClientPostgres } from '@prisma/postgresclient';
import { PrismaClient as PrismaClientMongo } from '@prisma/mongoclient';

export const dbPostgres = new PrismaClientPostgres();
export const dbMongo = new PrismaClientMongo();
