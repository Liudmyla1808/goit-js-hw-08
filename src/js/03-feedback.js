import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";
const refs = {
    forma: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
 const formData = {};
 populateFormData()
refs.forma.addEventListener('submit', throttle(onFormaSubmit,500));

refs.forma.addEventListener('input', e => {
     formData[e.target.name] = e.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
function populateFormData(){
    const saveForma = localStorage.getItem(STORAGE_KEY);
    const parseSaveForma = JSON.parse(saveForma);
    if(saveForma){
        console.log(parseSaveForma);
        refs.input.value = parseSaveForma.email;
        refs.textarea.value = parseSaveForma.message;
    } 
};
function onFormaSubmit(evt) {
evt.preventDefault();
evt.target.reset();
localStorage.removeItem(STORAGE_KEY);
};


