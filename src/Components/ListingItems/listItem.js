import React , {Component} from 'react'
import './listItem.css'

class Listitem extends Component{
    render(){
    const items = this.props.items;
    const listItems = items.map(item => {
        return <li key={item.key}>{item.text}</li>
    });
    return(
        <ul className="theList">
      {listItems}
  </ul>
    )
}
}

export default Listitem;