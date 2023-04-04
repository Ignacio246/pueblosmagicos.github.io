if(typeof(Storage)!= 'undefined'){
    console.log(Storage);
    // Asiganr elementos
    let title = ["Pueblos MAgicos de Hidalgo"];
    let description = ["Esta es una pagina web de ejemplo para mostrar informacion relacionada con pueblos magicos que se encuentran en la region de hidalgo"];
    let desarrolladores1 = ["Nombres:","Ignacio",
                        "Apellidos:","Candia Ibarra"]
    let desarrolladores2 = ["Nombres:","Jonathan Adair",
                        "Apellidos:","Ruiz Hernandez"]
    anexo1image = document.getElementById('image');
    var dataImage = localStorage.getItem('imgData');
    image = document.getElementById('tableBanner');
    localStorage.setItem("imgData", imgData);
    localStorage.setItem("title",title);
    localStorage.setItem("description",description);
    localStorage.setItem("Desarrolladores",desarrolladores1);
    localStorage.setItem("Desarrolladores",desarrolladores2);
    localStorage.setItem("information", JSON.stringify(desarrolladores1,desarrolladores2));
    localStorage.setItem('image', document.getElementById('image').value);
}else{
    alert('Storage no es compatible en este navegador ');
}
