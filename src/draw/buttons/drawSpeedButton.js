// Draw speed Button
const drawSpeedButton = (id, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.setAttribute('data-id', id);

    label.classList.add(
        'cursor-pointer',
        'px-3',
        'py-1',
        'rounded-xl',
        'bg-white',
        'shadow-lg',
        'shadow-black',
        'transition-colors',
        'duration-200',
        'hover:bg-purple-700',
        'hover:text-white',
        'has-checked:bg-purple-700',
        'has-checked:text-white',
    );

    const span = document.createElement('span');
    span.classList.add('text-sm');
    span.innerText = text;

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'speed');
    input.classList.add('hidden');

    label.append(span);
    label.append(input);

    return label;
};

export default drawSpeedButton;
