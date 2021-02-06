var canvas_div = document.getElementById('canvas');
canvas_div.onclick = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    let div_to_create = document.createElement('div');
    div_to_create.style.position = 'absolute';
    div_to_create.style.left = x + 'px';
    div_to_create.style.top = y + 'px';
    div_to_create.style.backgroundColor = 'blue';
    // div_to_create.style.border = '1px solid green';
    div_to_create.style.width = '5px';
    div_to_create.style.height = '5px';
    div_to_create.style.marginLeft = '-3px';
    div_to_create.style.marginTop = '-3px';
    div_to_create.style.borderRadius = '50%';
    canvas_div.appendChild(div_to_create);
}