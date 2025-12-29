import { Link } from 'react-outer-dom'
import './Card.css'

export const Card = ({id, title, price, address, date, img}) => {
    return (
        <Link to={`/product/$(id)`} className="card">
            <div className="cart--img">
                <img src={img} alt="card-img" />

                    <h5 className="cart--title">
                        {title}
                    </h5>

                    <strong className="cart--price">
                        {price}
                    </strong>

                    <div className="cart--desc-box">
                        <span className="cart--desc">
                            {address}
                        </span>

                        <span className="cart--desc">
                            {date}
                        </span>
                    </div>
            </div>
        </Link>
            )
}
