import React , {Component} from 'react'
import './listItem.css'

class Listitem extends Component{
    createtask(item){
        return <li key={item.key}>{item.text}</li>
    }

    render(){
    const items = this.props.items;
    const listItems = items.map(this.createtask);
    return(
        <ul className="theList">
      {listItems}
  </ul>
    )
}
}

export default Listitem;