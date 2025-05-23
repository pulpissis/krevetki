const characters = [
    {
        name: 'Малион',
        image: 'Malion.jpg',
        description: '<Описание>',
        type: 'Русал',
        skills: ['3 метра', '???', 'романтический интерес <отсутствует>']
    },
    {
        name: 'Муата',
        image: 'Muata.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['7 метров', '34 года', 'романтический интерес <отсутствует>']
    },
    {
        name: 'Абыр',
        image: 'abir.jpg',
        description: 'Рыба.',
        type: 'Рыба',
        skills: ['Рыба']
    },
    {
        name: 'Акира',
        image: 'Akira.jpg',
        description: '<Описание>',
        type: 'Русал',
        skills: ['3 метра', '20 лет', 'романтический интерес <>']
    },
    {
        name: 'Алекс',
        image: 'Alex.jpg',
        description: '<Описание>',
        type: 'Русал',
        skills: ['2,7 метра', '21 год', 'романтический интерес <Нари>']
    },
    {
        name: 'Кейрас',
        image: 'Keiras.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['???', '???', 'романтический интерес <>']
    },
    {
        name: 'Кристиан',
        image: 'Kristian.jpg',
        description: '<Описание>',
        type: 'Человек (пират)',
        skills: ['178 см', '32 года', 'романтический интерес <Волны, скалы, горизонт>']
    },
    {
        name: 'Лилиан',
        image: 'Lillian.jpg',
        description: '<Описание>',
        type: 'Русалка',
        skills: ['???', '???', 'романтический интерес <>']
    },
    {
        name: 'Лим',
        image: 'Lim.jpg',
        description: '<Описание>',
        type: 'Русалка',
        skills: ['2 метра', '17 лет', 'романтический интерес <>']
    },
    {
        name: 'Луан',
        image: 'luan.jpg',
        description: '<Описание>',
        type: 'Человек (пират)',
        skills: ['185 см', '???', 'романтический интерес <>']
    },
    {
        name: 'Мерилин',
        image: 'merilin.jpg',
        description: '<Описание>',
        type: 'Русал',
        skills: ['3,5 метра', '20 лет', 'романтический интерес <Нэш (замужем)>']
    },
    {
        name: 'Мормыш',
        image: 'mormish.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['4 метра', '22 года', 'романтический интерес <Персонаж не заинтересован в романтических отношениях>']
    },
    {
        name: 'Муня',
        image: 'munia.jpg',
        description: '<Описание>',
        type: 'Русалка',
        skills: ['2,3 метра', '19 лет', 'романтический интерес <Луан (невзаимно)>']
    },
    {
        name: 'Нари',
        image: 'nari.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['4,5 метра', '???', 'романтический интерес <Алекс>']
    },
    {
        name: 'Неранне',
        image: 'nerane.jpg',
        description: '<Описание>',
        type: 'Сирена (ж)',
        skills: ['5 метров', '23 года', 'романтический интерес <>']
    },
    {
        name: 'Нэш',
        image: 'nesh.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['6 метров', '???', 'романтический интерес <Мерилин (замужем)>']
    },
    {
        name: 'Несси',
        image: 'nessi.jpg',
        description: '<Описание>',
        type: 'Сирена (ж)',
        skills: ['4 метра', '23 года', 'романтический интерес <>']
    },
    {
        name: 'Ноктера',
        image: 'nocthera.jpg',
        description: '<Описание>',
        type: 'Сирена (ж)',
        skills: ['2 метра', '24 года', 'романтический интерес <Вымышленный образ двуногого человека>']
    },
    {
        name: 'Никсар',
        image: 'nyxar.PNG',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['10 метров', '27 лет', 'романтический интерес <отсутствует>']
    },
    {
        name: 'Рейчел',
        image: 'raichel.jpg',
        description: '<Описание>',
        type: 'Русалка',
        skills: ['3,5 метра', '???', 'романтический интерес <>']
    },
    {
        name: 'Селия',
        image: 'selia.jpg',
        description: '<Описание>',
        type: 'Ундина',
        skills: ['???', '???', 'романтический интерес <>']
    },
    {
        name: 'Сельвин',
        image: 'selvin.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['8 метров', '17 лет', 'романтический интерес <отсутствует>']
    },
    {
        name: 'Туллий',
        image: 'tullius.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['6 метров', '30 лет', 'романтический интерес <>']
    },
    {
        name: 'Усагу',
        image: 'usagu.jpg',
        description: '<Описание>',
        type: 'Сирена (ж)',
        skills: ['5 метров', '22 года', 'романтический интерес <>']
    },
    {
        name: 'Валакх',
        image: 'Valackh.jpg',
        description: '<Описание>',
        type: 'Сирена (м)',
        skills: ['6,5 метров', '30 лет', 'романтический интерес <>']
    },
];

function createCharacterCard(character) {
    const card = document.createElement('a');
    card.className = 'character-card-link';

    // Транслитерация кириллицы → латиница
    const filename = character.name
        .toLowerCase()
        .replace(/[а-яё]/g, m => {
            const ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
            const en = 'abvgdeejzijklmnoprstufhzcss_y_eua';
            return en[ru.indexOf(m)] || '-';
        });

    card.href = `characters/${filename}.html`;

    card.innerHTML = `
    <div class="character-card">
      <div class="card-image-container">
        <img src="images/${character.image}" alt="${character.name}" loading="lazy">
        <span class="character-type">${character.type}</span>
      </div>
      <div class="card-content">
        <h3>${character.name}</h3>
        <p class="character-description">${character.description}</p>
      </div>
    </div>
  `;

    return card;
}

function renderGallery(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    if (data.length === 0) {
        gallery.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Ничего не найдено в морских глубинах...</p>
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();
    data.forEach((character, index) => {
        const card = createCharacterCard(character);
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        fragment.appendChild(card);

        // Анимация появления
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 100 * index);
    });

    gallery.appendChild(fragment);
}

// Поиск персонажей
document.getElementById('search').addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase().trim();
    const filtered = characters.filter(c =>
        c.name.toLowerCase().includes(value) ||
        (c.description && c.description.toLowerCase().includes(value)) ||
        (c.type && c.type.toLowerCase().includes(value)) ||
        (c.skills && c.skills.some(skill => skill.toLowerCase().includes(value)))
    );
    renderGallery(filtered);
});

// Сортировка по алфавиту
let isSorted = false;
document.getElementById('sortBtn').addEventListener('click', () => {
    const sorted = [...characters].sort((a, b) =>
        isSorted ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
    isSorted = !isSorted;
    renderGallery(sorted);

    const icon = document.querySelector('#sortBtn i');
    icon.className = isSorted ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down';
});

// Случайный персонаж
document.getElementById('randomBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    renderGallery([characters[randomIndex]]);
});

// Инициализация галереи (только один раз!)
renderGallery(characters);;