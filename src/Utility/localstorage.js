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
    if (!exist) {
        storedReadList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedReadList))
    }
}





export { getStoredReadList, saveReadList }