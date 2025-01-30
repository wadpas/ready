import { sql } from 'drizzle-orm'
import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { createdAt, id, updatedAt } from '../schemaHelpers'

export const BookTable = pgTable('course', {
  id,
  title: text().notNull(),
  slug: text().notNull(),
  author: text().notNull(),
  description: text().notNull(),
  genre: text()
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  year: integer().notNull(),
  cover: text().notNull(),
  price: integer().notNull(),
  quantity: integer().notNull(),
  createdAt,
  updatedAt,
})
