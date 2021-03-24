import { useToasts } from 'react-toast-notifications'

export const ToastError = ({ content }) => {
  const { addToast } = useToasts()
  return (
            addToast(content, {
            appearance: 'error',
            autoDismiss: true,
    })
  )
}