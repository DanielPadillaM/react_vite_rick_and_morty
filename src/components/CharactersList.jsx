import { useState, useEffect } from "react";
import Character from "./Character";
import NavPage from './NavPage';



const CharacterList = ()=>{
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect( () => {

        const URL = `https://rickandmortyapi.com/api/character?page=${page}`;
        const fetchData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setLoading(false)
            setCharacters(data.results);
        }

        fetchData();

    },[page]);


    return(
      <section className="container">
        <NavPage setPage={setPage} page={page}/>

          {
            loading?(
                <h2>Loading.....</h2>
            ):(
                <div className="row">
                {characters.map(character=>{
                    return(
                        <div className="col-md-4" key={character.id}>
                            <Character  character={character}/>
                        </div>
                        )
                    })
                 }
            </div>
            )
          }

        <NavPage setPage={setPage} page={page}/>
      </section>
    )


}

export default CharacterList;