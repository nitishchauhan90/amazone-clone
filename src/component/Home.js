import React from 'react'
import "../Home.css"
import image1 from "./img/home1.jpg"
import image2 from "./img/home2.jpg"
import image3 from "./img/home3.jpg"
import image4 from "./img/home4.jpg"
import image5 from "./img/home5.jpg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Product from './product'
import product1 from "./img/product1.webp"
import product6 from "./img/product6.webp"
import product2 from "./img/product2.jpg"
import product3 from "./img/product3.jpg"
import product4 from "./img/product4.jpg"
import product5 from "./img/product5.jpg"
function Home() {
  const data=[image1,image2,image3,image4,image5]
  const [index,setIndex]=React.useState(0)
  function handleLeft(){
    if (index===0){
      setIndex(data.length-1)
    }
    else{
      setIndex(index-1)
    }

  }
  function handleRight(){

    if (index===data.length-1){
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }

  }
  return (
    <div className='home'>
      <div className='home_container'>
        <div>
          <div>
            <img  className='home_img' src={data[index]} alt=''/>
          </div>
          <ArrowBackIosIcon onClick={handleLeft} className='home_left'/>
          <ArrowForwardIosIcon onClick={handleRight} className='home_right'/>
        </div>
        <div className='home_row'>
          <Product title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses [Paperback] Ries, Eric"} 
            price={19.99} 
            rating={5} 
            image={product1}

          />
          <Product title={"MuscleBlaze Biozyme Iso-Zero, Low Carb, 100% Pure Whey Protein Isolate with USA Patent-Published Enhanced Absorption Formula (EAF), 27 g Pure Isolate Whey Per Scoop (Tropical Mango, 1 kg / 2.2 lb)"} 
            price={29.99} 
            rating={4} 
            image={product2}/>
        </div>
        <div className='home_row'>
          <Product title={"WisTec Professional Stand Mixer 1500 Watt | 8.5 Litre SS Bowl | 100% Copper Motor With Robust Metal Gears & Planetary Rotation Includes Beater & Aluminium Dough Hook & SS Whisk Cone(2 Years Warranty)"} 
            price={49.99} 
            rating={5} 
            image={product3}/>
          <Product title={"Villain Perfume For Men 100 Ml - Eau De Parfum - Premium Long Lasting Fragrance Spray - Woody & Spicy"} 
            price={39.99} 
            rating={3} 
            image={product4}/>
          <Product title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses [Paperback] Ries, Eric"} 
            price={79.99} 
            rating={4} 
            image={product5}/>
        </div>
        <div className='home_row'>
          <Product title={"Sony Bravia 189 cm (75 inches) 4K Ultra HD Smart LED Google TV KD-75X82L (Black)"} 
            price={399.99} 
            rating={4} 
            image={product6}/>
        </div>
      </div>
      
    </div>
    
  )
}

export default Home
