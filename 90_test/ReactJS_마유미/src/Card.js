
function Card(props){
    return (
        <li className="card_list">
            <div className="card_img">
                <img src={props.mimg} alt={props.mtit} />
            </div>
            <div>
                <div className="icon">
                    <img className="card_icon" src={props.idimg} alt={props.idimg} />
                    <img className="card_icon2" src={props.cart} alt={props.cart} />
                </div>
                {/* <span className="card_age">{props.mage}</span> */}
                <span className="card_tit">{props.mtit}</span>
            </div>
            <div className="card_btn">
                {/* <button>{props.mheart}</button> */}
                <p>40% <span>5,900 원</span></p>
                {/* <a href="#">구매</a> */}
            </div>
            <div className="dr">
                <span className="card_rate"><img className="rate_img" src={props.rate_img} alt={props.rate_img} />{props.mrate}</span>
                <span className="card_date"><img className="co_img" src={props.co_img} alt={props.co_img} />{props.mdate}</span>
            </div>
        </li>
    );
}