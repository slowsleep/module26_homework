export function fenceStringStyle(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
            newText += text[i].toUpperCase();
        } else {
            newText += text[i];
        }
    }
    return newText;
}
