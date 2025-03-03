import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const books = await db.book.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return books
})
