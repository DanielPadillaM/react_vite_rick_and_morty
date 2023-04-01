const Character = ({character})=>{
    return(
      <article className="text-center p-5">
        <h2>{character.name}</h2>
        <img className='img-fluid rounded-pill' src={character.image} alt={`${character.name} picture`}/>
        <span>{character.origin.name}</span>
      </article>
    )
}

export default Character;