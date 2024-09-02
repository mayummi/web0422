// App 컴포넌트
function App(){
    return (
        <ul className="container">
            {cards.map((item, idx)=> (
                <Card 
                    key={idx}
                    mimg={item.cimg}
                    idimg={item.idimg}
                    cart={item.cart}
                    mtit={item.ctit}
                    mrate={item.crate}
                    mdate={item.cdate}
                    rate_img={item.rate_img}
                    co_img={item.co_img}
                
                />
            ))}
        </ul>
    );
}