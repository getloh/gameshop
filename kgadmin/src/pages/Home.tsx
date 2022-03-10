import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';



function Home() {
    const [count, setCount] = useState(0);

  useEffect(() => {   
  }, [])

  const payload = [{nickname: "dave", hats: 5}]
  // const payload = [1, 3, 5]

  return (
    <div id="home">

    </div>
  );
}

export default Home;