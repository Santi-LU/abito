import './Header.css'

export const Header = {} => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <Link to=('/') className="header-logo"><img src="./img/logo.svg" alt="logo" />
                    <span></span>
                    </Link>
                    <div className="header-control">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn-primary">Подать объявление</button>
                    </div>

                    <div className="header-burger">
                        <img src="./img/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}