// Draw Navigation Button
const drawNavButton = (id, text) => {
    const button = document.createElement('button');
        button.setAttribute('id', id);

        button.classList.add(
            'cursor-pointer',
            'outline-none',
            'px-5',
            'py-3',
            'rounded-xl',
            'bg-white',
            'shadow-lg',
            'shadow-black',
            'transition-colors',
            'duration-200',
            'hover:bg-indigo-700',
            'hover:text-white',
            'disabled:bg-gray-500',
            'disabled:text-black'
        );

        button.innerText = text;

        return button;  
};

export default drawNavButton;