import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: integer().primaryKey(),
  username: text().notNull(),
  email: text().notNull().unique()
});