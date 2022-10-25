import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-bootstrap";
import {imgSlider} from '../.././stores/data'
import { propTypes } from 'react-bootstrap/esm/Image';




function CarouselItem (image) {
    return (
        <div className='container1'>
            <Carousel >
            {imgSlider.map((item,index) => {
              return (
                <Carousel.Item key={index}>
                    <div className='wrap1'>
                        <img src={item} alt=""/>
                    </div>
                </Carousel.Item>
              )
            })}
              
          </Carousel>
        </div>
    )
}

CarouselItem.prototype = {
  image: propTypes.string,
}
export default CarouselItem