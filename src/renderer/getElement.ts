const getElement = (id: string) => {
    const element = document.getElementById(id);
    if (!element) throw new Error(`[getElement] ${id} not found`);
    return element;
}

export default getElement;