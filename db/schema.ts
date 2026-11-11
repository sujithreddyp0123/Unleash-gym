import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const accounts=sqliteTable('fitness_accounts',{userId:text('user_id').primaryKey(),profile:text('profile').notNull(),state:text('state').notNull(),version:integer('version').notNull().default(1),updatedAt:text('updated_at').notNull()});
