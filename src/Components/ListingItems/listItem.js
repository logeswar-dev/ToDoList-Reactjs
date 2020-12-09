import React , {Component} from 'react'
import './listItem.css'

class Listitem extends Component{
    render(){
    const items = this.props.items;
    const listItems = items.map(item => {
        return <div className="list"><p key={item.key}>{item.text} <button onClick={() => this.props.deleteItem(item.key)}>Delete</button></p>
        </div>
    });
    return(
        <div className="listitems">
        {listItems}
  </div>
    )
}
}

export default Listitem;