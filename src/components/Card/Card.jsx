import './Card.css'

export const Card = ({title, prise, address, date, img}) => {
    return (
        <a href="./product.html" className="content-main_list-item">
            <div className="content-main_list-item--img">
                <img src={img} alt="card-img" />

                    <h5 className="content-main_list-item--title">
                        {title}
                    </h5>

                    <strong className="content-main_list-item--price">
                        {price}
                    </strong>

                    <div className="content-main_list-item--desc-box">
                        <span className="content-main_list-item--desc">
                            {address}
                        </span>

                        <span className="content-main_list-item--desc">
                            {date}
                        </span>
                    </div>
            </div>
        </a>
            )
}