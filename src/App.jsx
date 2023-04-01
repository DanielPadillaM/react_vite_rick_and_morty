import CharacterList from "./components/CharactersList";

const App = ()=>{
  return(
    <section className='bg-dark text-white'>
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
      <CharacterList/>
    </section>
  )
}

export default App;