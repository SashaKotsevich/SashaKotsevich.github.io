import api from "./api";

function display_result(user) {
    let fragment = document.createDocumentFragment();
    let output = document.getElementById("OutputSection");
    let tags = ["img", "p", "p", "p", "hr", "p", "p", "a", "a"];
    let fields=['avatar_url','name', 'login', 'bio','hr','company', 'location', 'email', 'blog'];
    for (let i = 0; i < tags.length; i++)
    {
        fragment.appendChild(create_fragment(user, tags[i], fields[i]));
    };
    clear_section(output);
    output.appendChild(fragment);

}
function clear_section(value) {
    while (value.firstChild) {
        value.removeChild(value.firstChild);
    }
}


function create_fragment(user,tag,field) {

    let fragment_item;
    if(tag!=='hr'){
        if(user[field]){
            switch (tag){
                case 'img':
                    fragment_item=document.createElement(tag);
                    fragment_item.src=user[field];
                    fragment_item.classList.add(field);
                    break;
                case 'p':
                    fragment_item=document.createElement(tag);
                    fragment_item.innerHTML=user[field];
                    fragment_item.classList.add(field);

                    break;
                case 'a':
                    fragment_item=document.createElement(tag);
                    fragment_item.innerHTML=user[field];
                    fragment_item.href=user[field];
                    fragment_item.classList.add(field);
                    break;

                default:
                    alert("something problem");
                    break
            }

        }else{
            fragment_item=document.createElement('p');
            fragment_item.textContent='not found';
            fragment_item.classList.add('nf_style');
        }
    }else fragment_item=document.createElement(tag);

    return fragment_item;

}
const  Dom={display_result};
export default Dom;