var input_value = document.querySelector('.input-value');
var add = document.querySelector('.add-item');
var ul = document.querySelector('.list');

ul.addEventListener('click', function () {
    var el = event.target;
    if(el.tagName =='BUTTON') {
        if(el.classList.contains('delete')) {
            el.parentNode.parentNode.remove();
        }
        else if(el.classList.contains('done')) {
            el.parentNode.parentNode.classList.add('green');
        }
    }
})

add.addEventListener('click', function () {
    event.preventDefault();
    if (input_value.value != "") {
        createList('li');
    }
    else {
        alert('please enter an item');
        input_value.focus();
    }
});

function createList(text) {
    var li = document.createElement(text);
    ul.appendChild(li);
    li.classList.add(text);

    var para = document.createElement('p');
    li.appendChild(para);
    para.textContent = input_value.value;
    input_value.value = "";

    var div = document.createElement('div');
    li.appendChild(div);
    div.classList.add('buttons');

    var deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    div.appendChild(deletebtn);
    deletebtn.classList.add('delete');

    var donebtn = document.createElement('button');
    donebtn.textContent = "Done";
    div.appendChild(donebtn);
    donebtn.classList.add('done');
}
