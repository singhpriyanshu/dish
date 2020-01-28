import React, { Component } from 'react'
import { Button, Icon } from 'antd';


class Step2 extends Component {
    render() {
        let {selectRestaurant} = this.props
        return (
            <div>
        Please Select a Restaurant :  

      <select name="selectRestaurant" defaultValue={selectRestaurant} onChange={this.props.handleChange} style={{ width: 120 }} >
      <option value="Olive Garden">Olive Garden</option>
      <option value="Panda Express">Panda Express</option> 
      <option value="Pizzeria">Pizzeria</option>
      <option value="Vege Deli">Vege Deli</option> 
      <option value="BBQ Hut">BBQ Hut</option>
      <option value="Mc Donalds">Mc Donalds</option> 
      </select> 
      <br/>
     
      <Button type="primary" style={{margin:"50px"}}> <Icon type="left" />Previous</Button>
      <Button type="primary"> Next <Icon type="right" /></Button>
      
    </div>
        )
    }
}

export default Step2
