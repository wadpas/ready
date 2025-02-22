import { authSchema } from '~/utils/validations'
import db from '~/utils/db'

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, (body) => authSchema.parse(body))

  let currentUser = await db.user.findUnique({
    where: {
      email,
    },
  })

  if (!currentUser) {
    throw createError({
      statusCode: 402,
      statusMessage: 'Invalid2 credential',
    })
  }

  if (!currentUser.password) {
    const userOAuthAccount = await db.oAuthAccount.findFirst({
      where: {
        userId: currentUser.id,
      },
    })
    if (userOAuthAccount) {
      const oAuthProvider = userOAuthAccount.providerId
      throw createError({
        statusCode: 403,
        statusMessage: `Please login with ${oAuthProvider}`,
      })
    }
  }

  if (currentUser.password) {
    const isPasswordCorrect = await verifyPassword(currentUser.password, password)
    if (!isPasswordCorrect) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid credential',
      })
    }
  }

  const transformedUser = sanitizeUser(currentUser)

  await setUserSession(event, {
    user: transformedUser!,
  })
  return transformedUser
})
