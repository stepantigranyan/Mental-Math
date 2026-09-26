const drawRadioButton = (id, text, groupName, styleClasses) => {
    const {
        textSize,
        backgroundColorHover,
        textColorHover,
        backgroundColorChecked,
        textColorChecked,
    } = styleClasses;

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.setAttribute('data-id', id);

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
        backgroundColorHover,
        textColorHover,
        backgroundColorChecked,
        textColorChecked,
    );

    const span = document.createElement('span');
    span.classList.add(textSize);
    span.innerText = text;

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', groupName);
    input.classList.add('hidden');

    label.append(span);
    label.append(input);

    return label;
};

export default drawRadioButton;
