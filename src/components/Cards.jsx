const Cards = ({cards}) => {
    return ( 
        <div id="cards">
            {cards.map((card, index)=>(
                <li key={card.id} style={{ marginBottom: '20px' }}>                        
                    <img  className= "sculpture_image" src={card.url} alt={card.alt} />
                    <div id="card_details">
                    <h2 className= "sculpture_name" >{card.name}</h2>
                    <h3 className="sculpture_artist">{card.artist}</h3>
                    <p className="sculpture_descri">{card.description}</p>
                    </div>
                </li>
            ))}
      </div>
     );
}
 
export default Cards;