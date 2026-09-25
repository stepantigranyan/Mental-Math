// Draw Page Title
const drawPageTitle = (text) => {
    const title = document.createElement('h2');
    title.classList.add('text-4xl', 'text-white', 'text-shadow-lg', 'text-shadow-black');
    title.innerText = text;

    return title;
};

export default drawPageTitle;