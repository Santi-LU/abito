import { useEffect } from "react"

export const Layout = () => {
    const [searchText, setSearchText] = useState('')

    const [products, setProducts] = useState([])

    const handleSearch = (event) =>{
        setSearchText(event.target.value)
    }

    const handleSearchArray = () => {
        setProducts(cardArray.filter((p) => p.title.includes(SearchText) || p.price.includes(SearchText)
    ))
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input 
                            type="text"
                            value={searchText}
                            />
                  
                <button className=" btn btn-primary search-btn" onClick={handleSearchArray}>
                                <img className="search-btn_icon" src="./img/search.svg" alt="search" />
                                <span className="search-btn_text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <Outlet context={{product}}/>
            </main>
            </>
            )

    

}