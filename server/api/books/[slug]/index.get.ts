import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const genre = await db.book.findUnique({
    where: {
      slug: event.context.params?.slug,
    },
  })
  return genre
})
