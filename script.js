document.addEventListener("DOMContentLoaded", () => {
    const formNamesURL = "./formNames.json";

    fetch(formNamesURL).then((result) => {
        return result.json();
    }).then((data) => {
        createNavLinks(data.forms);
    }).catch((error) => {
        console.log(error);
    });
});

const createNavLinks = (linksArray) => {
    const baseURL = "./pages/form/index.html";
    const nav = document.getElementById("form-nav-container");

    linksArray.sort((a, b) => a.name.localeCompare(b.name));

    linksArray.forEach((item, index) => {
        const a = document.createElement("a");
        a.href = `${baseURL}?name=${item.name}&template=${item.nameJSON}`;
        a.innerHTML = item.name;

        nav.appendChild(a);
    });
}