import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const books = await db.book.findMany({
    orderBy: {
      title: 'asc',
    },
    include: {
      authors: true,
      genres: true,
    },
  })
  return books
})
