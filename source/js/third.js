/* 1. Используйте Random User API, чтобы получить 10 случайных пользователей и
 отобразить их в виде списка. Для каждого пользователя нужно отобразить его имя,
 email и фотографию профиля.
 Требуется:
 ● Использовать fetch для выполнения запроса к API.
 ● Обрабатывать состояние загрузки (например, показывать «Загрузка...», пока
 данные получаются).
 ● Обрабатывать ошибки в случае неудачи запроса к API (например, показывать
 сообщение «Не удалось загрузить пользователей»).
 Пример:
 function fetchRandomUsers() {
 // Ваш код здесь
 }
 */

(async () => {
  async function getPosts() {
    let response;

    try {
      response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error(`${response.status} — ${response.statusText}`);
      }

      const posts = await response.json();
      return posts;
    } catch {
      console.error("Не удалось загрузить пользователей");
    }
  }

  const posts = await getPosts();

  console.log(posts.results[0]);

  const users = posts.results;
  console.log(users);

  const list = document.querySelector(".user__list");

  const elementM = () => {
    const template = document
      .querySelector("#user-item-template")
      .content.querySelector(".user__item");

    const item = template.cloneNode(true);

    item.querySelector(".user__name").textContent = users.name;
    item.querySelector(".user__email").textContent = users.email;
    item.querySelector(".user__img").src = users.thumbnail;

    return item;
  };

  const listFragment = document.createDocumentFragment();

  const createList = (us) => {
    Array.from(us).forEach((user) => {
      const element = elementM(user);
      listFragment.appendChild(element);
    });

    list.appendChild(listFragment);
  };

  createList(users);
  console.log(createList(users));

  Array.from({ length: 10 }, createList(users));
})();

/* 2. Карусель изображений
Создайте карусель изображений, где изображения автоматически сменяются каждые 3
 секунды. Также добавьте кнопки «Назад» и «Вперед» для ручной смены изображения.
 Требуется:
 ● Использовать JavaScript для управления сменой изображений.
 ● Настроить таймер с помощью setInterval для автоматической смены
 изображений.
 ● Обработать кнопки «Назад» и «Вперед» с помощью событий.
*/

let currentIndex = 0;
const galleryItems = document.querySelectorAll(".gallery__item");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

const goToSlide = (index) => {
  if (index < 0) {
    index = galleryItems.length - 1;
  } else if (index >= galleryItems.length) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector(".gallery__inner").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
};

function goToNextSlide() {
  goToSlide(currentIndex + 1);
}

function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

setInterval(goToNextSlide, 3000);

nextBtn.addEventListener("click", () => {
  goToNextSlide();
});

prevBtn.addEventListener("click", () => {
  goToPrevSlide();
});
