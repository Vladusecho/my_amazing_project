const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');
let lastActive = null;

openBtn.addEventListener('click', () => {
    lastActive = document.activeElement;
    document.getElementById('modalWrapper').style.display = 'flex';
    dlg.showModal(); // модальный режим + затемнение
    dlg.querySelector('input,select,textarea,button')?.focus();
});

closeBtn.addEventListener('click', () => dlg.close('cancel'));

form?.addEventListener('submit', (e) => {
 // 1) Сброс кастомных сообщений
    [...form.elements].forEach(el => el.setCustomValidity?.(''));
 // 2) Проверка встроенных ограничений
    if (!form.checkValidity()) {
        e.preventDefault();
 // Пример: таргетированное сообщение
    const email = form.elements.email;
    if (email?.validity.typeMismatch) {
        email.setCustomValidity('Введите корректный e-mail, например name@example.com');
    }
    const phone = document.getElementById('phone');
phone?.addEventListener('input', () => {
 const digits = phone.value.replace(/\D/g,'').slice(0,11); // до 11 цифр
 const d = digits.replace(/^8/, '7'); // нормализуем 8→ 7
 const parts = [];
 if (d.length > 0) parts.push('+7');
 if (d.length > 1) parts.push(' (' + d.slice(1,4));
 if (d.length >= 4) parts[parts.length - 1] += ')';
 if (d.length >= 5) parts.push(' ' + d.slice(4,7));
 if (d.length >= 8) parts.push('-' + d.slice(7,9));
 if (d.length >= 10) parts.push('-' + d.slice(9,11));
 phone.value = parts.join('');
});
// Строгая проверка (если задаёте pattern из JS):
phone?.setAttribute('pattern', '^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$');

    form.reportValidity(); // показать браузерные подсказки
 // A11y: подсветка проблемных полей
    [...form.elements].forEach(el => {
    if (el.willValidate) el.toggleAttribute('aria-invalid', !el.checkValidity());
 });
 return;
 }
 // 3) Успешная «отправка» (без сервера)
 e.preventDefault();
 // Если форма внутри <dialog>, закрываем окно:
 document.getElementById('contactDialog')?.close('success');
 form.reset();
});
dlg.addEventListener('close', () => { 
    lastActive?.focus(); 
    document.getElementById('modalWrapper').style.display = 'none';
});
// Esc по умолчанию вызывает событие 'cancel' и закрывает <dialog>