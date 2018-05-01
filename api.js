import DOM from './dom.js'

function  request() {

    let username = document.getElementById("username_input_field").value;
    fetch('https://api.github.com/users/' + username).then(
        (response => {
            if (response.status >= 200 && response.status < 400) {
                return response.json();
            }
        })).then(user => {

        DOM.display_result(user);
    })
        .catch(() => {
           showError()
        });
}
function showError(){
    console.log("Something error");
}
const api={request};
export default api;