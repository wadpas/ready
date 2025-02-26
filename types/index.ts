export type APIError = {
  statusCode: number
  statusMessage: string
  message: string
  data?: Record<string, string>
}

export type RouteParams = {
  genreId: string
  bookId: string
  slug: string
}
