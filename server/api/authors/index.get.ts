import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const authors = await db.author.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return authors
})
