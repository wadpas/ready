import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user && session.user?.role === 'admin') {
    try {
      // await db.genre.delete({
      //   where: {
      //     slug: event.context.params?.slug,
      //   },
      // })
      console.log(event.context.params?.slug)
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Помилка при видалені жанру',
      })
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'У доступі відмовлено. Ви не авторизовані як адміністратор',
    })
  }
})
