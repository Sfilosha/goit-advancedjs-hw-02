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

const formData = {
    delay: null,
    state: null,
};

const onFormFieldInput = event => {
    const { target: formEl } = event;
    const fieldName = formEl.name;
    const fieldValue = formEl.value;

    formData[fieldName] = fieldValue;
}


formEl.addEventListener("input", onFormFieldInput);


formEl.addEventListener("submit", event => {
    event.preventDefault();
    const createPromise = new Promise((resolve, reject) => {
        console.log(formData.state)
    setTimeout(() => {
    if (formData.state === 'fulfilled') {
      resolve(iziToast.show({
                message: `✅ Fulfilled promise in ${formData.delay}ms`,
            }));
    } else {
        reject(iziToast.show({
                message: `❌ Rejected promise in ${formData.delay}ms`,
            }));
    }
  }, formData.delay);
})
})




