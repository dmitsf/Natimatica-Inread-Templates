function readTextFileHead(file) {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                const allText = rawFile.responseText;
                document.head.innerHTML += allText;
            }
        }
    };
    rawFile.send(null);
}

function readTextFileBody(file) {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                const allText = rawFile.responseText;
                document.body.innerHTML += (allText);
            }
        }
    };
    rawFile.send(null);
}

readTextFileHead('./build/head.html');
readTextFileBody('./build/body.html');

document.addEventListener("DOMContentLoaded", function () {
    let script = document.createElement('script');
    script.src = "//unpkg.com/imask@5.2.0/dist/imask.min.js";

    document.head.append(script);

    window.addEventListener('load', () => {
        window.postMessage('AdLoaded', '*');
    });

    const leftImage = './img/pic1.jpg';
    const leftImageSecond = './img/pic2.jpg';
    const firstTitle = 'Мы знаем квартиру Вашей мечты!';
    const checkboxList = ['просторная', 'зеленая зона', 'с отделкой', 'развитая инфраструктура', 'рядом с метро', 'безопасный район'];
    const secondTitle = `<div class="inread__second-title-big">1 шаг</div><div class="inread__second-title-small">до уникального <br> предложения</div>`;

    const inreadImage = document.getElementsByClassName('inread__image')[0];
    const firstTitleItem = document.getElementsByClassName('inread__first-title')[0];
    const checkboxContainer = document.getElementsByClassName('inread__first-checkboxes')[0];
    const mainElement = document.getElementsByClassName('inread__container')[0];
    const closeButton = document.getElementsByClassName('inread-close')[0];


    const firstButton = document.getElementsByClassName('inread__first-button')[0];

    /* Адрес страницы */
    let href;

    try {
        href = window.top.location.href
    } catch (e) {
        href = ''
    }

    /* Кликовая ссылка */
    const linkOut = '';

    closeButton.onclick = () => {
        window.postMessage('AdVideoComplete', '*');
    };

    const secondFrame = `
        <div class="inread__second">
            <div class="inread__second-title"></div>
            <form action="" class="inread__second-wrapper">
                <input class="inread__second-input" id="name" placeholder="Имя" type="text"> 
                <input class="inread__second-input" id="phone" placeholder="Телефон" type="text">
                <div class="inread__second-form-footer">
                    <a class="inread__second-button" target="_blank" href=${linkOut}>Оставить заявку</a>
                    <a class="inread__second-link" target="_blank" href=${linkOut}>Посмотреть на сайте</a>
                </div>
                <label class="inread__checkbox inread__checkbox_second">
                    Даю согласие на обработку персональных данных
                    <input type="checkbox" id="policy" checked>
                    <span class="checkmark"></span>
                </label>
            </form>
        </div>
    `;

    const thirdFrame = `
        <div class="inread__third">
            <div class="inread__third-title-big">Спасибо!</div>
            <div class="inread__third-title-small">Мы свяжемся с Вами в ближайшее время</div>
        </div>
    `;

    inreadImage.style.backgroundImage = `url(${leftImage})`;
    firstTitleItem.innerHTML = firstTitle;

    checkboxList.map((e, i) => {
        checkboxContainer.innerHTML += `
            <label class="inread__checkbox">${e}
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
        `;
    });

    /* Адреса отправки запросов */
    let urlStat = '//my.natimatica.com/app/proxy/stat/marshal_residential_complex',
        urlLead = '//my.natimatica.com/app/proxy/lead/marshal_residential_complex';

    function send_data(data, url) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "text/plain");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // console.log('ok');
            }
        };
        const jsonData = JSON.stringify(data);
        xhr.send(jsonData);
    }

    /* Событие при загрузке скрипта */
    window.postMessage('AdLoaded', '*');
    /* Оправка статы по закгрузке первого фрейма */
    send_data({form: '1', referer: href}, urlStat);

    firstButton.onclick = () => {
        mainElement.innerHTML = secondFrame;
        inreadImage.style.backgroundImage = `url(${leftImageSecond})`;
        /* Оправка статы по закгрузке второго фрейма */
        send_data({form: '2', referer: href}, urlStat);

        const secondTitleItem = document.getElementsByClassName('inread__second-title')[0];
        const formButton = document.getElementsByClassName('inread__second-button')[0];
        const checkbox = document.getElementsByClassName('inread__checkbox_second')[0];
        const phone = document.getElementById('phone');
        const name = document.getElementById('name');
        const policy = document.getElementById('policy');
        const data = {};
        const maskOptions = {
            mask: '+{7} (000) 000-00-00'
        };
        const mask = IMask(phone, maskOptions);

        secondTitleItem.innerHTML = secondTitle;

        name.onkeydown = function (e) {
            let reg = /[0-9]/;
            if (reg.test(e.key)) {
                return false
            }
        };

        formButton.onclick = (e) => {
            let phoneValid = mask.unmaskedValue.length === 11;

            phoneValid ? phone.classList.remove('error') : phone.classList.add('error');
            policy.checked ? checkbox.classList.remove('error') : checkbox.classList.add('error');

            if (phoneValid && policy.checked) {
                data.contact_info = name.value;
                data.contact_phone = mask.unmaskedValue;
                data.creativeName = 'marshal_residential_complex';
                data.referer = href;

                send_data(data, urlLead);
                send_data({form: '3', referer: href}, urlStat);
                mainElement.innerHTML = thirdFrame;
                mainElement.classList.add('inread_3');

                setTimeout(function () {
                    window.postMessage('AdVideoComplete', '*');
                }, 5000)
            } else {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    };
});
