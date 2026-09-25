// Draw Wrapper
const drawWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('flex', 'flex-col', 'gap-y-5', 'items-center');

    return wrapper;
};

export default drawWrapper;