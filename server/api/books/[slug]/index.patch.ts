import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { bookSchema } from '~/server/utils/validations'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

  if (session.user && session.user?.role === 'admin') {
    const { title, description, coverURLs, year, pages, genreIds, authorIds, price, isFeatured, isAvailable } =
      await readValidatedBody(event, (body) => bookSchema.parse(body))
    const slug = cyrillicToTranslit.transform(title.trim(), '-').replaceAll('.', '').replaceAll(',', '').toLowerCase()

    try {
      const book = await db.book.update({
        where: {
          slug: event.context.params?.slug,
        },
        data: {
          title,
          slug,
          description,
          coverURLs: coverURLs,
          year,
          pages,
          genreIds,
          authorIds,
          price,
          creatorId: session.user.id,
          isFeatured,
          isAvailable,
        },
      })
      return book
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
