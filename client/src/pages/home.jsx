import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import home1 from '../img/home1.jpg'
import home2 from '../img/home2.jpg'

function Home() {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate('/shop')
  }

  return (
    <div id="home-page">
        <section id="home-1">
            <div id="home-1-side">
              <h1>Pick up some nostalgia</h1>
              <h2>A curated shop of cult classic and critically acclaimed games</h2>
              <button onClick={goToShop}>Shop now!</button>
            </div>
            <div id="home-1-right">
              <img src={home1} alt="" />
            </div>
        </section>
        <section id="home-2">
            <h2>Why make a shop?</h2>
            <div id="home-2-lower">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores assumenda error fuga quas minima quia quod praesentium labore similique?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum ipsam nostrum dignissimos neque facere, non perferendis minus aliquam accusantium?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nulla eos praesentium delectus unde architecto, impedit quidem placeat repellendus aliquid iure! Cum adipisci nostrum cumque.</p>
            </div>

        </section>
        <section id="home-3">
            <img src={home2} alt="" />
            <div id="home-3-side">
              <h1>Pick me!</h1>
              <p>Look at how much fun this guy is having, this could be you! <br/>
               Why does this stock photo exist? <br />
                This is not a picture of me. <br />
                Wait why is the controller wire going over his shoulder? Is the console behind him?</p>

            </div>

        </section>
        <section id="home-4">
          <h3>Made by Steven Loh</h3>
          <p>This is a fictional company (in case you couldn't tell)</p>
          <h4><a href="http://getloh.co.uk">www.getloh.co.uk</a></h4>
        </section>
    </div>

  );
}

export default Home;
