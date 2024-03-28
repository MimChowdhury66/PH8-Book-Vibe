import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStoredReadList = () => {
    const storedReadList = localStorage.getItem('read-list');
    if (storedReadList) {
        return JSON.parse(storedReadList)
    }
    return [];
}



const saveReadList = id => {
    const storedReadList = getStoredReadList();
    const exist = storedReadList.find(bookId => bookId === id);
    if (exist) {
        toast.error('You have already read this book')
    }
    else {
        storedReadList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedReadList));
        toast.success('This book is added to read list')
    }
}




export { getStoredReadList, saveReadList }