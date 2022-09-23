import { React,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardComponent from './cardComponent'
import { fetchCards } from '../redux/actions/displayCardAction';
import './cardList.css';


const CardList = () => {
  
  const userList = useSelector((state) => state.data  );
  console.log(userList);  
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(fetchCards());
  },[]);


  return (  
    <div className="cardList">
        {userList.map((object) => {
          return <CardComponent key={object.id} {...object} />;
        })}
    </div>
  )
}

export default CardList;
