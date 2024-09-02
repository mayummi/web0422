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
                    mage={item.cage}
                    mrate={item.crate}
                    mdate={item.cdate}
                    mheart={item.cheart}
                    rate_img={item.rate_img}
                    co_img={item.co_img}
                
                />
            ))}
        </ul>
    );
}