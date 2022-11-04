import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreaters';
import { userSlice } from './store/reducers/userSlice';


function App() {
  const {count,users,isLoading,error}=useAppSelector(state=>state.userReducer)
  const {increment}=userSlice.actions
  const dispatch=useAppDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  
  
  return (
    <div className="App">
    <h1>{count}</h1>
    {isLoading && <h1>Идет загрузка...</h1>}
    {error&& <h1>{error}</h1>}
    {JSON.stringify(users,null,2)}
    <button onClick={()=>dispatch(increment(10))} >+</button>
   
    </div>
  );
}

export default App;
