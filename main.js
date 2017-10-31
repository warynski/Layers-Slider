document.addEventListener('DOMContentLoaded', () =>  {
    let wrapper = document.getElementById('wrapper');
    let container = wrapper.querySelector('.first');

    wrapper.addEventListener('mousemove', (e) => {
        container.style.width = e.clientX + 'px';
    });
});