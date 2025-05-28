// Быстрый подбор тура (hero-form)
document.getElementById('quick-form').addEventListener('submit', function(e) {
e.preventDefault();
const country = this.country.value;
const budget = this.budget.value;
alert(`Спасибо! Я подберу для вас тур в «${country}» с бюджетом ${budget}. Ожидайте звонка или сообщения!`);
this.reset();
});

// Валидатор формы заявки (contact-form)
document.getElementById('contact-form').addEventListener('submit', function(e) {
e.preventDefault();
const name = this.name.value.trim();
const phone = this.phone.value.trim();
if (name.length < 2) {
alert('Пожалуйста, введите имя (минимум 2 символа)');
this.name.focus();
return;
}
if (!/^+?\d{10,15}\$/.test(phone.replace(/\D/g, ''))) {
alert('Пожалуйста, введите корректный номер телефона');
this.phone.focus();
return;
}
this.style.display = 'none';
this.parentNode.querySelector('.form-success').style.display = 'block';
});
