const searchBtn = document.querySelector('.search-btn') 
const searchInput = document.querySelector('.search-box input')
// Создаем контейнер для карточек, если его нет
let cardWrapper = document.querySelector('.content-main_list')

// Если контейнера нет в HTML - создаем его
if (!cardWrapper) {
    const contentMain = document.querySelector('.content-main')
    cardWrapper = document.createElement('div')
    cardWrapper.className = 'content-main_list'
    contentMain.appendChild(cardWrapper)
}

const cardArray = [
    {
        id: 0,
        title: 'Первый товар', 
        price: '170 р',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.jpg' 
    },
    {
        id: 1,
        title: 'Второй товар', 
        price: '171 р',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.jpg'
    },
    {
        id: 2,
        title: 'Третий товар', 
        price: '123 р',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.jpg'
    },
    {
        id: 3,
        title: 'Четвертый товар', 
        price: '154 р',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.jpg'
    },
    {
        id: 4,
        title: 'Пятый товар', 
        price: '115 р',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.jpg'
    },
    {
        id: 5,
        title: 'Шестой товар', 
        price: '106 р',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.jpg'
    }
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main_list-item">
                <div class="content-main_list-item--img">
                    <img src="${item.img}" alt="${item.title}"/>
                </div>
                <h5 class="content-main_list-item--title">${item.title}</h5>
                <strong class="content-main_list-item--price">${item.price}</strong>
                <div class="content-main_list-item--desc-box">
                    <span class="content-main_list-item--desc">${item.address}</span>
                    <span class="content-main_list-item--desc">${item.date}</span>
                </div>
            </a>
        `)
    })
}

const filteredarray = (array, value) => {
    return array.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase()) || 
               item.price.toLowerCase().includes(value.toLowerCase())
    })
}


cardWrapper.style.display = 'flex'
cardWrapper.style.flexWrap = 'wrap'
cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'


render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredarray(cardArray, searchInput.value))
})


searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        render(filteredarray(cardArray, searchInput.value))
    }
})