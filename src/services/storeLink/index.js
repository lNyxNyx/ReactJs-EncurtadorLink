//Buscando os links salvos
async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

//Salvar links no LocalStorage
async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    //Não duplicar links
    const haslink = linksStored.some(link => link.id === newLink.id);

    if (haslink) {
        console.log(" LINK DUPLICADO");
        return;
    }

    // Add Link
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));

}

//Deletar link salvos
function deleteLink(links, id) {
    const myLinks = links.filter(item => {
        return (item.id !== id)
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    /* alert("LLINK DELETADO COM SUCESSO !   ✔️"); */
    return myLinks;
}


export { getLinksSave, saveLink, deleteLink };


