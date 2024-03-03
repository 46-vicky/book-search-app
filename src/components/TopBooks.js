import React from 'react'
import { useSelector } from 'react-redux'
import { FiTrendingUp } from "react-icons/fi";

const TopBooks = () => {
const authorsList = useSelector((state)=>state.author.authorList);
const topWorkList = useSelector((state)=>state.author.topWorkList);
const trendingList = authorsList.map((author,index)=>{
    return (<li key={index}><p>{topWorkList[index]} - <span>{author}</span></p></li>)   
})
  return (
    <div>
        <h2 className='trend-title'><span><FiTrendingUp /></span>Trending Books</h2>
        <ul className="trending-list-sec">
            {trendingList}
        </ul>
    </div>
  )
}

export default TopBooks