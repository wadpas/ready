import { pgTable, integer, jsonb, uuid, text, timestamp } from 'drizzle-orm/pg-core'
import { createdAt, id, updatedAt } from '../schemaHelpers'
import { relations } from 'drizzle-orm'
import { UserTable } from './user'
import { BookTable } from './book'

export const PurchaseTable = pgTable('purchases', {
  id,
  pricePaidInCents: integer().notNull(),
  productDetails: jsonb().notNull().$type<{ name: string; description: string; imageUrl: string }>(),
  userId: uuid()
    .notNull()
    .references(() => UserTable.id, { onDelete: 'restrict' }),
  productId: uuid()
    .notNull()
    .references(() => BookTable.id, { onDelete: 'restrict' }),
  stripeSessionId: text().notNull().unique(),
  refundedAt: timestamp({ withTimezone: true }),
  createdAt,
  updatedAt,
})

export const PurchaseRelationships = relations(PurchaseTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [PurchaseTable.userId],
    references: [UserTable.id],
  }),
  product: one(BookTable, {
    fields: [PurchaseTable.productId],
    references: [BookTable.id],
  }),
}))
