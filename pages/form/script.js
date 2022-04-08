const searchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(searchParams);

document.title = `Forms2PDF | ${params.name}`;

document.addEventListener("DOMContentLoaded", () => {
    const formTemplateURL = `./formTemplates/${params.template}.json`;

    fetch(formTemplateURL).then((result) => {
        return result.json();
    }).then((data) => {
        createForm(data);
    }).catch((error) => {
        console.log(error);
    });
});

const createForm = (formJSON) => {
    const main = document.getElementById("page-main");
    main.innerHTML += json2html.render({}, formJSON)
}