// Инициализируем Swiper
new Swiper('.image-slider', {
    // Стрелки
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
    },
    // Навигация
    // Буллеты, текущее положениеб прогрессбар
    pagination: {
        el: '.swiper-pagination',
        /* 
        // Буллеты
        clickable: true,
        // Динамичесике буллеты
        dynamicBullets: true,
        // Кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
         */
        // Фракция
        type: 'fraction',
        // Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span';
        },
        /* 
        // Прогрессбар
        type: 'progressbar'
         */
        // Скролл
        scrollbar:{
            el: 'swiper-scrollbar',
            // Возможность перетаскивать скролл
            draggable: true
        },
    },
});