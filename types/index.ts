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

export type Book = {
  id: string
  title: string
  slug: string
  authors: Author[]
  genres: Genre[]
  description: string
  coverURLs: string[]
  year: number
  pages: number
  price: number
  isFeatured: boolean
  isAvailable: boolean
}

export type Author = {
  id: string
  name: string
  slug: string
}

export type Genre = {
  id: string
  name: string
  slug: string
}
