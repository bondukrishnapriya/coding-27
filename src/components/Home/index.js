// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="heading">Clothes That get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="description">
          Fashion is the part of daily air and it does not quiet help that it
          changes all time .clothes have always been mark of era and we are in
          revolution .Your fashion makes you been seen and heard that way you
          are.So celebrate the seasons new and exciting fashion in you own way.
        </p>
        <button type="button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)
export default Home
