import {loadHeader } from './app.js'

const showHeader = async () => {
    const header = await loadHeader();
    document.querySelector("header").innerHTML = header;
}

showHeader();