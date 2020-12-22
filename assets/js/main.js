import {loadHeader } from './app.js'

const onInit = async () => {
    const header = await loadHeader();
    document.querySelector("header").innerHTML = header;
}

onInit();