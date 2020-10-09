const button = document.createElement('button');

button.innerHTML = '<div>Hello World</div>';

button.addEventListener('click', () => {
    import('./people').then(event => {
        const people = event.default;
        people.sayHello();
    });
});

document.body.appendChild(button);