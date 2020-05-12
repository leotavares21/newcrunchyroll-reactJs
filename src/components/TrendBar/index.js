import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { PageHead, Slider, SliderMask, Arrow } from './styles'
import AnimeItem from './animeItem/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'



export default class TrendBar extends Component {

  state = {
    animes: [],
    x: 0
  }
  componentDidMount(){
    axios.get('http://localhost:3001/animesTrend')
    .then( res => {
      this.setState({ animes: res.data })
    })
  }


  handleClickOnLeft = () => {
    const x = this.state.x;

      this.setState({
        x: x + 100 * 6
      })

      if(x === 0){
        this.setState({
          x: -1200
        })
      }
     
  }

  handleClickOnRight = () => {
    const x = this.state.x;
  
    this.setState({
      x: x - 100 * 6
    })
    
    if(x === -1200){
      this.setState({
        x: 0
      })
    }

  }


  render() {

    return (
      <Fragment>
      <PageHead>Em Alta</PageHead>
        <Slider>
          <SliderMask>

            {this.state.animes.map((anime) => {
              return (
                <AnimeItem 
                  setX={this.state.x}
                  data={anime}
                  key={anime.id}
                />
              );
            })}

          </SliderMask>

           <Arrow goLeft onClick={this.handleClickOnLeft}>
              <FontAwesomeIcon icon={faChevronLeft} />
           </Arrow>

           <Arrow goRight onClick={this.handleClickOnRight}>
              <FontAwesomeIcon icon={faChevronRight} />
           </Arrow>
        </Slider>

    </Fragment>
    )
  }
}

