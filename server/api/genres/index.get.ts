import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const genres = await db.genre.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return genres
})
