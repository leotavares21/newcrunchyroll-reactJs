import React, { Component } from 'react'

import { SliderItem, SliderItemInner, Img, Content, Name, Age, Episodes, Description, Gender} from './styles'

export default class AnimeItem extends Component {

    render() {
        const { data } = this.props;
        const x = this.props.setX;

        return (
          <SliderItem style={{transform: `translateX(${x}%)`}}>
            <SliderItemInner>
                <Img src={data.image} alt={`${data.name} imagem`}/>

                <Content>
                  <Name>{data.name}</Name>
                  <Age>+{data.age}</Age>
                  <Episodes>{data.episodes} episodios</Episodes>
                  <Description>{data.description}</Description>
                  <Gender>
                    <li>{data.gender[0]}</li>
                    <li>{data.gender[1]}</li>
                    <li>{data.gender[2]}</li>
                  </Gender>
                </Content>
                
            </SliderItemInner>
          </SliderItem>             
        )
    }
}
