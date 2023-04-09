import { useEffect, useState } from 'react'
import GamesList from './components/GamesList'
import axios from 'axios'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

function App() {
  const [games, setGames] = useState([])
  const [searchName, setSearchName] = useState('')
  const [searchScore, setSearchScore] = useState('')
  const [searchOrder, setSearchOrder] = useState('')
  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get(
        'https://public.connectnow.org.uk/applicant-test/'
      )
      // console.log(data)
      await setGames(data)
    }
    fetchGames()
  }, [])

  useEffect(() => {
    if (searchName && searchName !== '' && games.length > 0) {
      setGames(
        games.filter((game) =>
          String(game.name.toLowerCase()).includes(searchName.toLowerCase())
        )
      )
    }

    if (
      searchScore &&
      searchScore > 0 &&
      searchScore < 11 &&
      games.length > 0
    ) {
      setGames(
        games.filter((game) => game.rating / 10 >= parseInt(searchScore))
      )
    }
    if (searchOrder) {
      if (searchOrder === 'Release Date') {
        setGames(
          games.sort((a, b) => {
            return new Date(b.released) - new Date(a.released)
          })
        )
      }
      if (searchOrder === 'Name') {
        setGames(
          games.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
        )
      }
    }
  }, [searchName, searchScore, searchOrder])
  // if (games.length > 0) console.log(' Hello --', games[0].rating / 10)
  if (games.length > 0) {
    // console.log(
    //   ' Hello ',
    //   games[1]['first_release_date'] > games[0]['first_release_date']
    // )
    // console.log(' Hello d--',)
  }
  // handleClear
  const handleClear = () => {
    setSearchName('')
    setSearchScore('')
    setSearchOrder('')
  }
  return (
    <div>
      <header className='max-w-7xl mx-auto py-8'>
        <Navbar />
      </header>
      <main className='max-w-7xl mx-auto flex flex-col md:flex-row justify-start items-start gap-x-4'>
        <aside className='bg-[#0e1a2b] px-4 py-6 flex flex-col justify-start text-left ml-0'>
          <h3 className='text-xl font-semibold'>Filter Results</h3>
          <form method='get' className='py-4'>
            <div>
              <label htmlFor='name' className='font-medium text-base'>
                Name (contains)
              </label>
              <input
                type='text'
                name='name'
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                id='name'
                placeholder='Text String'
                className='bg-[#182c47] text-[#c1d1e8] mt-2 font-normal text-xs px-1 py-1.5 leading-loose font-mulish w-full'
              />
            </div>
            <div>
              <label htmlFor='score' className='font-medium text-base'>
                Minimum Score
              </label>
              <input
                type='number'
                name='name'
                value={searchScore}
                onChange={(e) => setSearchScore(e.target.value)}
                id='name'
                placeholder='1-10'
                className='bg-[#182c47] text-[#c1d1e8] mt-2 font-normal text-xs px-1 py-1.5 leading-loose font-mulish w-full'
              />
            </div>
            <div>
              <label htmlFor='order' className='font-medium text-base block'>
                Order By
              </label>
              <select
                name='order'
                id='order'
                value={searchOrder}
                onChange={(e) => setSearchOrder(e.target.value)}
                className='bg-[#182c47] text-[#c1d1e8] mt-2 font-normal text-xs px-1 py-2 w-full leading-loose font-mulish'
              >
                <option value=''>Order By</option>
                <option value=''>Release Date</option>
                <option value=''>Name</option>
              </select>
            </div>
            <button
              type='button'
              onClick={handleClear}
              className='bg-[#5692e8] py-2 px-4 font-medium text-xs my-4 flex justify-end mr-0 ml-auto'
            >
              Clear
            </button>
          </form>
        </aside>
        {games.length === 0 ? <Loader /> : <GamesList games={games} />}
      </main>
    </div>
  )
}

export default App
