import React from 'react'
import SearchBox from './SearchBox'
import RelatedBooks from './RelatedBooks'


const Home = () => {

  return (
    <div className="p-3 mb-2 homepage">
           <div className='header'>
                <h3 className='p-3 mb-2 pge-title'>Enjoy the Reading!</h3>
           </div>
          <SearchBox />
          <RelatedBooks /> 
    </div>
  )
}

export default Home