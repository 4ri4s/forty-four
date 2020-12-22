
//ES6 version arrow function with async and await & fetch html
export const loadHeader = async()=>{
    const response = await fetch('assets/layout/header.html');
    const text = await response.text();
    return text;
}


//Another version, same result
/* fetch("assets/layout/header.html")
    .then(response => {
        return response.text();
    })
    .then(
        function(data) {
            document.querySelector("header").innerHTML = data;
        }
    ); */