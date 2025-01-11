// Описаний у документації https://marcelodolza.github.io/iziToast/
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// izi Toast settings
iziToast.settings({
    position: 'topRight',
    progressBar: false,
    close: false,
    messageColor: 'black',
});


const formEl = document.querySelector('form');

formEl.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const selectedType = formData.get("state");
    const setDelay = formData.get("delay");

    const createPromise = new Promise((resolve, reject) => {
        console.log(selectedType)
    setTimeout(() => {
    if (selectedType === 'fulfilled') {
      resolve(iziToast.show({
                message: `✅ Fulfilled promise in ${setDelay}ms`,
            }));
    } else {
        reject(iziToast.show({
                message: `❌ Rejected promise in ${setDelay}ms`,
            }));
    }
    }, Number(setDelay));    
})
    createPromise
    .then(result => {}) // Обробка результату
        .catch(error => { }); // Обробка помилки
})




