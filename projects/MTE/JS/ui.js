function boldClick() {
    document.execCommand('bold', false);
}
            
function italicClick() {
    document.execCommand('italic', false);
}

function underLineClick() {
    document.execCommand('underline', false);
}

function toNightMode() {
    var bodyClass = document.getElementById("editor");
    if (bodyClass.className === 'light') {
        bodyClass.className = 'dark';
    } else {
        bodyClass.className = 'light';
    }
}