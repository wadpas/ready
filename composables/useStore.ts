import { toast } from '~/components/ui/toast'
import type { APIError } from '~/types'

interface State {
  isLoading: boolean
  appError: APIError | null
  isModalVisible: boolean
}
const state = reactive<State>({
  isLoading: false,
  appError: null,
  isModalVisible: false,
})

export default () => {
  const { isLoading, appError, isModalVisible } = toRefs(state)

  const toggleLoading = (value: boolean) => {
    state.isLoading = value
  }

  const toggleError = (error: APIError) => {
    state.appError = error
    return error
  }

  const toggleAlertModal = (value: boolean) => {
    state.isModalVisible = value
    return value
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
    isModalVisible,
    toggleAlertModal,
    toggleLoading,
    toggleError,
    showError,
    showMessage,
  }
}
