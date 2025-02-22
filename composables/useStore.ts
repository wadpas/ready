import { title } from 'process'
import { toast } from '~/components/ui/toast'
import type { APIError } from '~/types'

interface State {
  isLoading: boolean
  appError: APIError | null
}
const state = reactive<State>({
  isLoading: false,
  appError: null,
})

export default () => {
  const { isLoading, appError } = toRefs(state)

  const toggleLoading = (value: boolean) => {
    state.isLoading = value
  }

  const toggleError = (error: APIError) => {
    state.appError = error
  }

  const showError = (error: APIError) => {
    toast({
      title: 'Помилка',
      description: error.message,
      variant: 'destructive',
      duration: 3000,
    })
  }

  const showMessage = (content: { title: string; description?: string }) => {
    toast({
      title: content.title,
      description: content.description,
      duration: 3000,
    })
  }

  return {
    isLoading,
    appError,
    toggleLoading,
    toggleError,
    showError,
    showMessage,
  }
}
