// Draw Mode Button 
const drawModeButton = (id, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    
    label.classList.add(
        'cursor-pointer',
        'px-5',
        'py-3',
        'rounded-xl',
        'bg-white',
        'shadow-lg',
        'shadow-black',
        'transition-colors',
        'duration-200',
        'hover:bg-amber-700',
        'hover:text-white',
        'has-checked:bg-amber-700',
        'has-checked:text-white'
    );

    const span = document.createElement('span');
    span.classList.add('text-sm');
    span.innerText = text;

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'mode');
    input.classList.add('hidden');

    label.append(span);
    label.append(input);

    return label
};

export default drawModeButton;
