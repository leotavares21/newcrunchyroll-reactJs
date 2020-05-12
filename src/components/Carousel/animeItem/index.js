import React, { Component } from 'react'

import { SliderItem, Img, Content, Age, Watch, Description} from './styles'

export default class AnimeItem extends Component {

    render() {
        const { data } = this.props;
        return (
          <SliderItem >
                <Img src={data.image} alt={`${data.name} imagem`}/>

                <Content>
                  <Watch>Assista Já</Watch>
                  <Description>Saiba Mais!</Description>
                </Content>

                <Age>+{data.age}</Age>
                
          </SliderItem>             
        )
    }
}
