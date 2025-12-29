import { useParams } from "react-router-dom"

export const Product = () => {
    const {products} = useOutletContext()
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id)

    return (
        <>

            <Header />
            <main>
                <section class="search">
                    <div class="container">
                        {findProduct ?
                            <div class="search-box">
                                <input type="text">
                                    <button class=" btn btn-primary search-btn">
                                        <img class="search-btn_icon" src="/img/search.svg" alt="search" />
                                        <span class="search-btn_text">Найти</span>
                                    </button>
                            </div>
                </div>
                </section>

                <section class="content">
                    <div class="container">
                        <div class="content-box">
                            <div class="content-product">
                                <div class="content-product_left">
                                    <h2 class="content-product_title">{findProduct.title}</h2>
                                    <img class="content-product_img" src={findProduct.img} alt="card-img" />
                                    <p class="content-product_text">
                                        {findProduct.description}
                                    </p>
                                </div>
                                <div class="content-product_right">
                                    <h2 class="content-main_price">{findProduct.price}</h2>

                                    <button class="btn btn-primary btn-large">Показать телефон</button>
                                </div>
                            </div>

                            <div class="content-side_box">
                                <div class="content-side_list">
                                    <div class="content-side_list-item">
                                        <img class="content-side_list-item--img" src="/image/side-info-1.svg" alt="side-info" />
                                        <h5 class="content-side_list-item--titile">Доставка</h5>
                                        <p class="content-side_list-item--text">
                                            Проверка при получении и возможность бесплатно вернуть товар
                                        </p>
                                    </div>

                                    <div class="content-side_list-item">
                                        <img class="content-side_list-item--img" src="/image/side-info-2.svg" alt="side-info" />
                                        <h5 class="content-side_list-item--titile">Автотека</h5>
                                        <p class="content-side_list-item--text">
                                            Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                        </p>
                                    </div>

                                    <div class="content-side_list-item">
                                        <img class="content-side_list-item--img" src="/image/side-info-3.svg" alt="side-info" />
                                        <h5 class="content-side_list-item--titile">Онлайн-бронирование жилья</h5>
                                        <p class="content-side_list-item--text">
                                            Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                        </p>
                                    </div>

                                </div>

                                <div class="content-side_footer">
                                    <p class="content-side_footer--item">
                                        © ООО «Абито», 2011–2021
                                    </p>
                                    <a href="#" class="content-side_footer--item">
                                        Политика конфиденциальности
                                    </a>
                                    <a href="#" class="content-side_footer--item">
                                        Обработка данных
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    :
                    <h2>Тут нема</h2>
                        }


                </div>
            </section>
        </main >
                            </>
                                        )
}