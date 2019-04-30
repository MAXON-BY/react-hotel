const HOTELS = [
    {
        id: 7969942,
        name: 'Красивая, лучшая квартира!',
        description: 'Эта современная, светлая и полностью меблированная 3-комнатная квартира с видом на площадь Кройцбергер Шпревальдплац и всего в 200 метрах от парка Герлитцер приветствует вас в самом сердце Берлина.',
        price: 209,
        status: true,
        image: 'https://a1.muscache.com/im/pictures/109467913/296cdac4_original.jpg?aki_policy=x_medium'
    },
    {
        id: 450818343,
        name: 'Фантастический вид в супер месте',
        description: 'Спокойный оазис в центре города, с фантастическим видом с балкона. Большинство достопримечательностей находятся в нескольких минутах ходьбы. Автобус, метро, супермаркеты, рестораны и кафе на углу.',
        price: 104,
        status: false,
        image: 'https://a2.muscache.com/im/pictures/60695965/9cdada99_original.jpg?aki_policy=x_medium'
    },
    {
        id: 1350671472,
        name: 'Хорошая комната в центре Берлина',
        description: 'Ницца - квартира рядом Mauerpark Бернауэр штрассе. Он находится в районе Берлин-Митте можно добраться до любой достопримечательности Берлина менее чем за 30 минут на трамвае, метро.',
        price: 117,
        status: false,
        image: 'https://a0.muscache.com/im/pictures/158207ca-75db-4f05-90ad-90519c227cf7.jpg?aki_policy=x_medium'
    },
    {
        id: 976856,
        name: 'Комната на Борисовской',
        description: 'Квартира находится в бывшей Восточной части Берлина между Потсдамской площадью и Александерплац. Эта часть города является очень привлекательным жилым районом и полна истории и мест, чтобы обнаружить. Район моды "Митте", десятки хороших ресторанов, баров, театров и клубов находятся на пороге.',
        price: 48,
        status: true,
        image: 'https://img.tyt.by/720x720s/n/nedvizhimost/0d/8/lenina11-04c9904bb5.jpg'
    },
    {
        id: 4508189875873,
        name: 'Минск-Мир Хата',
        description: 'Хата типа в крутом месте. Набегай, налетай. Капец как дорого.',
        price: 154,
        status: false,
        image: 'https://content.onliner.by/news/1100x5616/2d87a83ac83ceb19fd73436570841e53.png'
    },
    {
        id: 13501472,
        name: 'Двушка в Уручье',
        description: 'В этом крутом районе сможете несколько парков, типа там школы и сады переполнены... ну как везде. А двушка норм, рядом метро. Можете заселяться парой.',
        price: 117,
        status: false,
        image: 'https://static.bn.ru/images/photo/2018_12/9913179_1545325287sb.jpg'
    },
    {
        id: 9765856,
        name: 'Шабаны - апартаменты в отстойнике',
        description: 'Супер-пупер вонь вам всем обеспечена. Заезжайте и подыхайте!',
        price: 48,
        status: true,
        image: 'https://ic.pics.livejournal.com/kotkovalexey/76651547/93659/93659_800.jpg'
    },
    {
        id: 45083183,
        name: 'Однушка с бомжом',
        description: 'Всем, кому одиноко хорошо подойдет этот вариант. Клопы, крысы и бомж Валера станут вашими лучшими друзьями на ближайший месяц.',
        price: 104,
        status: false,
        image: 'http://rent-in-minsk.com/upload/img_1_1.jpg'
    },
    {
        id: 135013472,
        name: 'Сдаётся коробка от унитаза',
        description: 'Очень недорого, ЭКСКЛЮЗИВ -  экспериментальное жильё для студентов. Звоните, торопитесь!',
        price: 117,
        status: false,
        image: 'https://doba.ua/upload/resize_cache/iblock/b47/b471b22aa56546d3e3a0174128f92313/700_400_1/ls3a0918.jpg'
    },
    {
        id: 9768562,
        name: 'Однушка в 500 км от МКАД',
        description: 'Только для адекватных студентов. Недалеко от метро Могилевская. Всего в 8 часах езды. ОЧЕНЬ СРОЧНО!',
        price: 48,
        status: true,
        image: 'https://nedvizhimostpro.kz/uploads/apartments/19374/pictures/ae011db40778.jpeg'
    },
    {
        id: 45081835,
        name: 'Тут типа название',
        description: 'Тут типа описание...',
        price: 104,
        status: false,
        image: 'https://ubr.ua/img/article/1914/68_main.jpg'
    },
    {
        id: 135014723,
        name: 'Целый дом',
        description: 'Целый дом для бухача, вечеринок, пати и всякой непристойной хрени. Колличество участников не ограничено. Большой холодос для пивасика и огромный телек с крутой акустистой. ',
        price: 117,
        status: false,
        image: 'https://www.e1.ru/articles/images/012/259/big/1.jpg'
    },
    {
        id: 97684556,
        name: 'Место под лестницей',
        description: 'Места мало, зато много общения обеспечено. Бетон без подогрева. Но можно настрелять сигарет у соседей',
        price: 48,
        status: true,
        image: 'https://garantus.by/uploads/images/kvartira/2/Uanki_Kypala_16_1_29000/DSC06629.JPG'
    },
    {
        id: 4502238183,
        name: 'Просто двушка в двушке',
        description: 'Двушка и ничего больше. Даже посрать негде. ',
        price: 104,
        status: false,
        image: 'https://www.sergo.com.ua/upload/novosti/50-idey-dizayna-smart-kvartir/50-idey-dizayna-smart-kvartir-000.jpg'
    },
    {
        id: 902238183,
        name: 'Бомжатник за просто так',
        description: 'Надоело нормальная жизнь. Ищу единомышленников для начала ассоциальной жизни. Нормальных и адекватных просьба не беспокоить.',
        price: 104,
        status: false,
        image: 'https://www.belnovosti.by/sites/default/files/article/2019/03/20/3b46db4102_compressed.jpg'
    }
];

export default HOTELS;