import React from "react";
import './../styles/App.css';
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { fetch } from "../redux/actions/loremActions";

const App = () => {

  const arr = useSelector(state => state)

  const dispatch = useDispatch()

  axios.get('https://gauravgitacc.github.io/postAppData/posts.json').then(response => dispatch(fetch(response.data))).catch(e => console.log(e))

  return (
    <div className="container">

      {arr.map((data, index) => 
      <div className="card" key={index}>

        <p><b>Title: </b>{data.title}</p>
        <p><b>Body: </b>{data.body}</p>

      </div>)}

    </div>
  )
}

export default App
