import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccess = (message) => {
    toast.success(message);
}

export const showError = (message) => {
    toast.error(message);
}

export const showInfo = (message) => {
    toast.info(message);
}

const Toast = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ zIndex: 99999 }}
        />
    );
}     

export default Toast;