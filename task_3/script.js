const url = 'https://rickandmortyapi.com/api/episode';
const url2 = 'https://rickandmortyapi.com/api/character';

const firstRequest = new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => res(xhr.response);
    xhr.onerror = () => rej(xhr.status);
});

const secondRequest = new Promise(() => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url2);
    xhr.send();

    xhr.onload = () => res(xhr.response);
    xhr.onerror = () => rej(xhr.status);
});

Promise.all([firstRequest, secondRequest])
    .then(() => {
        console.log('оба ответа получены');
    })
    .catch(() => {
        console.log('оба ответа не получены');
    });