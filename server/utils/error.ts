export const handleError = (error: any) => {
  const generalMessage = 'An unexpected error occurred'
  let statusCode = 500
  let statusMessage = 'Unexpected error'
  let message = generalMessage
  let data = undefined

  if (error.response) {
    statusCode = error.response.status
    statusMessage = error.response.statusText
    message = error.response._data?.message
    data = error.response.data?.data
  }

  return {
    statusCode,
    statusMessage,
    message,
    data,
  }
}
