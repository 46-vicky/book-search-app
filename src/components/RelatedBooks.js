import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authorAction } from '../stores/authorSlice'
import { useFetchBooks } from '../hooks/useFetchBooks';
import TopBooks from './TopBooks';

const RelatedBooks = () => {
  const dispatch = useDispatch();  
  const isAuthorFetchDone = useSelector((state)=> state.author.isFetchDone);
  const {makeAuthorRequest} = useFetchBooks();
  useEffect(()=>{
    if(!isAuthorFetchDone){
        fetchAuthor();
    }else{

    }
  })

  const fetchAuthor = ()=>{
    makeAuthorRequest(listAuthor)
  }

  const listAuthor = (res)=>{
    const authorsList = [];
    const topWorkList = [];
    for (const author in res){
        authorsList.push(res[author].name);
        topWorkList.push(res[author].top_work);
    }

    dispatch(authorAction.fetchAuthors(authorsList));
    dispatch(authorAction.fetchTopWork(topWorkList));
    dispatch(authorAction.setFetchDone())
  }

  return (
    <div>
        {isAuthorFetchDone && <TopBooks/>}
    </div>
  )
}

export default RelatedBooks