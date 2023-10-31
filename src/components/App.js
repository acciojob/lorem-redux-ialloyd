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
    <>{arr.length && <><h1>A short Naration of lorem ipsum</h1><h4>Below containes title body</h4></>}
      <div className="container">

        {arr.map((data, index) =>
          <li className="card" key={index}>

            <p><b>Title: </b>{data.title}</p>
            <p><b>Body: </b>{data.body}</p>

          </li>)}

      </div></>
  )
}

export default App
