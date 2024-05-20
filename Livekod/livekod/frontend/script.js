window.addEventListener('load', () => {
    console.log('Hello World!');
    fetch('http://localhost:8080/api/posts')
        .then(response => {
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
})