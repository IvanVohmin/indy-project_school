import { toast } from 'react-toastify';

const settings = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

export const useNotification = (type, text) => {
    switch (type) {
        case "success":
            toast.success(text, settings)
            break
        case "warning":
            toast.warning(text, settings)
            break
        case "error":
            toast.error(text, settings)
            break
        case "info":
            toast.info(text, settings)
            break
    }
}