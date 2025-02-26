import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { genreSchema } from '~/server/utils/validations'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

  if (session.user && session.user?.role === 'admin') {
    const { name } = await readValidatedBody(event, (body) => genreSchema.parse(body))
    const slug = cyrillicToTranslit.transform(name, '_').toLowerCase()

    try {
      let genre = await db.genre.findUnique({
        where: { slug },
      })
      console.log(genre)

      if (genre) {
        throw new Error()
      }
      genre = await db.genre.create({
        data: {
          name,
          slug,
          createdBy: session.user.id,
        },
      })
      return genre
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Помилка при створенні нового жанру',
      })
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'У доступі відмовлено. Ви не авторизовані як адміністратор',
    })
  }
})
