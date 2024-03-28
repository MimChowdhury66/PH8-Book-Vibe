import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// read-item
const getStoredReadList = () => {
    const storedReadList = localStorage.getItem('read-list');
    if (storedReadList) {
        return JSON.parse(storedReadList)
    }
    return [];
}



const saveReadList = id => {
    const storedReadList = getStoredReadList();
    const existRead = storedReadList.find(bookId => bookId === id);
    if (existRead) {
        toast.error('You have already read this book')
    }
    else {
        storedReadList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedReadList));
        toast.success('This book is added to read list')
    }
}



// wish list item
const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wish-list');
    if (storedWishList) {
        return JSON.parse(storedWishList)
    }
    return [];
}

const saveWishList = id => {



    const storedWishList = getStoredWishList();
    const exist = storedWishList.find(bookId => bookId === id);

    const storedReadList = getStoredReadList();
    const existRead = storedReadList.find(bookId => bookId === id);


    if (existRead) {
        toast.warn('You have already read this book')

    }
    else if (!exist) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success('Book added to wish list')
    }
    else {
        toast.error('You have already add this book')

    }
}




export { getStoredWishList, saveWishList, getStoredReadList, saveReadList }