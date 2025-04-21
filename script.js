document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const openModalButtons = document.querySelectorAll(".openModal");

  modal.style.display = "none";

  openModalButtons.forEach(button => {
      button.addEventListener("click", function () {
          modalContent.innerHTML = `
              <span class="close">&times;</span>
              <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
              <input type="text" placeholder="Ваше имя*" id="nameInput" required>
              <input type="text" placeholder="Ваш телефон*" id="phoneInput" required>
              <button id="submit">Отправить</button>
          `;
          modal.style.display = "flex";

          document.querySelector(".close").addEventListener("click", () => modal.style.display = "none");

          document.getElementById("submit").addEventListener("click", () => {
              const name = document.getElementById("nameInput").value.trim();
              const phone = document.getElementById("phoneInput").value.trim();

              if (!name || !phone) {
                  alert("Пожалуйста, заполните все поля!");
                  return;
              }

              const formData = new FormData();
              formData.append("name", name);
              formData.append("phone", phone);

              fetch("https://script.google.com/macros/s/AKfycbwrklddjqZBzEfkwnQfFtwoDMnJDCptvO4PpFo07GP-q61ABIdYPiFteC4EYk4eNNY/exec", {
                  method: "POST",
                  mode: "no-cors",
                  body: formData
              });

              modalContent.innerHTML = `
                  <span class="close">&times;</span>
                  <h2 style="color: #ff0; text-align: center;">ВАША ЗАЯВКА ПРИНЯТА!</h2>
                  <p style="text-align: center; color: #ff0;">Наш сотрудник свяжется с Вами в ближайшее время.</p>
              `;

              document.querySelector(".close").addEventListener("click", () => modal.style.display = "none");
          });
      });
  });

  window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const openModal1Buttons = document.querySelectorAll(".openModal1");

  modal.style.display = "none";

  openModal1Buttons.forEach(button => {
      button.addEventListener("click", function () {
          modalContent.innerHTML = `
              <span class="close">&times;</span>
              <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
              <input type="text" placeholder="Ваше имя*" id="nameInput" required>
              <input type="text" placeholder="Ваш телефон*" id="phoneInput" required>
              <button id="submit">Отправить</button>
          `;
          modal.style.display = "flex";

          document.querySelector(".close").addEventListener("click", () => modal.style.display = "none");

          document.getElementById("submit").addEventListener("click", () => {
              const name = document.getElementById("nameInput").value.trim();
              const phone = document.getElementById("phoneInput").value.trim();

              if (!name || !phone) {
                  alert("Пожалуйста, заполните все поля!");
                  return;
              }

              const formData = new FormData();
              formData.append("name", name);
              formData.append("phone", phone);

              fetch("https://script.google.com/macros/s/AKfycbwrklddjqZBzEfkwnQfFtwoDMnJDCptvO4PpFo07GP-q61ABIdYPiFteC4EYk4eNNY/exec", {
                  method: "POST",
                  mode: "no-cors",
                  body: formData
              });

              modalContent.innerHTML = `
                  <span class="close">&times;</span>
                  <h2 style="color: #ff0; text-align: center;">ВАША ЗАЯВКА ПРИНЯТА!</h2>
                  <p style="text-align: center; color: #ff0;">Наш сотрудник свяжется с Вами в ближайшее время.</p>
              `;

              document.querySelector(".close").addEventListener("click", () => modal.style.display = "none");
          });
      });
  });

  window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
  });
});





window.addEventListener("load", function () {
  const swiper = new Swiper('.swiper-container.partners-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    on: {
      init: function () {
        this.slideToLoop(0, 0); // Принудительно перейти на начало
      }
    }
  });

  // Обновляем swiper через небольшой таймер — на случай если слайды ещё не прогрузились
  setTimeout(() => {
    swiper.update();
  }, 200);
});



  

const scriptURL = 'https://script.google.com/macros/s/AKfycbwrklddjqZBzEfkwnQfFtwoDMnJDCptvO4PpFo07GP-q61ABIdYPiFteC4EYk4eNNY/exec';

document.querySelectorAll('form[data-google-form]').forEach(form => {
  const wrapper = form.closest('.form-wrapper'); // родительский блок, где есть и форма, и toast/loading
  const toast = wrapper.querySelector('.toast');
  const loading = wrapper.querySelector('.loading');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    loading.style.display = 'block';

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        form.reset();
        loading.style.display = 'none';
        showToast(toast);
      })
      .catch(error => {
        loading.style.display = 'none';
        alert("Ошибка при отправке. Попробуйте снова.");
        console.error('Ошибка!', error.message);
      });
  });
});

function showToast(toast) {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


  function switchLang(lang) {
    if (lang === 'ru') {
      window.location.href = 'index.html';
    } else if (lang === 'uz') {
      window.location.href = 'index_uz_full.html';
    }
  }
  function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const content = document.querySelector("main"); // или другой блок с контентом
  
    if (menu.style.right === "0px") {
      menu.style.right = "-250px";
      content.style.marginTop = "0";
    } else {
      menu.style.right = "0px";
      content.style.marginTop = "250px"; // смещение вниз
    }
  }
  