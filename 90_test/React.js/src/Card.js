
function Card(props){
    return (
        <li className="card_list">
            <div className="card_img">
                <img src={props.mimg} alt={props.mtit} />
            </div>
            <div>
                <span className="card_age">{props.mage}</span>
                <h3 className="card_tit">{props.mtit}</h3>
            </div>
            <div>
                <span className="card_rate">예매율{props.mrate}%</span>
                <span className="card_date">개봉일{props.mdate}</span>
            </div>
            <div className="card_btn">
                <button>{props.mheart}</button>
                <a href="#">예매</a>
            </div>
        </li>
    );
}