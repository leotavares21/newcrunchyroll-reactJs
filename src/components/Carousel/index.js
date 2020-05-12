
import React, { Component } from 'react'
import { CarouselContent, CarouselItem, CarouselBtn} from './styles'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AnimeItem from './animeItem/index'



export default class Carousel extends Component {

  state = {
    animes: [],
    x: 0
  }

  componentDidMount(){
    axios.get('http://localhost:3001/animesNew')
    .then( res => {
      this.setState({ animes: res.data })
    })
  }

  goLeft = () => {
    const x = this.state.x;

      this.setState({
        x: x + 100
      })

      if(x === 0){
        this.setState({
          x: -500
        })
      }
     
  }

  goRight = () => {
    const x = this.state.x;
  
    this.setState({
      x: x - 100 
    })
    
    if(x === -500){
      this.setState({
        x: 0
      })
    }

  }

  render() {
    return (

      <CarouselContent>
          {this.state.animes.map((anime, index) => {
            return (
              <CarouselItem key={index} style={{transform: `translateX(${this.state.x}%)`}}>
                <AnimeItem 
                    data={anime}
                    key={anime.id}
                />
              </CarouselItem>
            );
          })}

          <CarouselBtn goLeft onClick={this.goLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </CarouselBtn>

          <CarouselBtn goRight onClick={this.goRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </CarouselBtn>

      </CarouselContent>
    )
  }
}


