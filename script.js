function downloadtable() {
    let node = document.getElementById('corpo');

    domtoimage.toPng(node).then(function (dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            downloadURI(dataUrl, "cardapio.png")
    }).catch(function (error) {
            console.error('oops, something went wrong', error);
    });
}

function downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}