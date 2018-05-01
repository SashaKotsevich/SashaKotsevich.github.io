let input=document.getElementById('#username_input');
input.addEventListener('keyup',function (event) {
    event.preventDefault();
    if(event.keyCode === 13){
        query();
    }
});

function clearDesk() {
    let desk=document.getElementById('#res_field');
    while (desk.firstChild){
        desk.removeChild(desk.firstChild);
    }
}

function query() {
    Array.from(document.getElementById('#res_field').children).forEach(item => {
        item.remove();
    });
    let username=document.getElementById('#username_input').value;
    fetch('https://api.github.com/users/'+username).then(
        (response => {
            if (response.status >= 200 && response.status < 400)
                return response.json();
        })).then(user => { result(user) })
        .catch(() => { showError() });
}

function result(user) {
    hideError();
    let elements=[], root, fields=['name', 'login', 'bio', 'company', 'location', 'email', 'blog'];
    root=create('div');
    root.id='container';
    root.className='user_container';
    appendChildToRoot('#res_field',root);
    elements.push(create('img'));
    for (let i=1;i<fields.length;i++)
        elements.push(create());
    elements.push(create('a'));

    elements[0].src=user['avatar_url'];
    elements[0].className='avatar_img';
    for (let i=1, j=0;i<fields.length+1;i++,j++) {
        elements[i].innerHTML = setFields(user, fields[j]);
        elements[i].className = fields[j];
    }
    if (user['blog'] !== '')
        elements[elements.length-1].setAttribute('href', user['blog']);
    elements.map(item => { appendChildToRoot('container',item); });
}

function showError() {
    document.getElementById('#error_block').className='error_block_shown'
}

function hideError() {
    document.getElementById('#error_block').className='error_block_hidden'
}

function appendChildToRoot(rootId, child) {
    document.getElementById(rootId).appendChild(child)
}

function create(tag='p') {
    return document.createElement(tag)
}

function setFields(user, field) {
    let res=field[0].toUpperCase()+field.slice(1);
    if (user[field] === null || user[field] === '')
        return res+' is not set';
    else if (field !== 'login' || field !== 'name')
        return mention(user[field]);
    else
        return res+': '+user[field];
}

function mention(string) {
    let pattern=/\B(@[a-z0-9_-]+)/gi;
    let mentions=string.match(pattern);
    if (mentions){
        for (let i=0;i<mentions.length;i++)
            string=string.replace(mentions[i],"<span class='bold'>"+mentions[i]+"</span>");
    }
    return string;
}