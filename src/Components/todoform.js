import React , {Component} from 'react'
import ListItem from '../Components/ListingItems/listItem'

class TodoForm extends Component{
    constructor(props){
    super(props);
        this.state ={
        items: [],
        currentItems:{
            text: '',
            key: ''
        }
        }

    }

    handleInput = (e) =>{
        this.setState({
            currentItems:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    addItem = (e) =>{
        e.preventDefault();
        let newItem = this.state.currentItems;
        console.log(newItem);
        if(newItem.text === ""){
            const newItems = [...this.state.items , newItem]
            this.setState({
                items: newItems,
                currentItems:{
                    text: '',
                    key:''
                }
            })
        }
    }

    render(){
        return(
            <div className="App">
                <header>
                    <form class="todo-form" onSubmit={this.addItem}>
                    <input 
                    type="text" 
                    placeholder="Enter the Text" 
                    value={this.state.currentItems.text} 
                    onChange={this.handleInput} />
                    <button>Add</button>
                     <ListItem items = {this.state.items} currentItems = {this.state.currentItems}></ListItem>
                    </form>
                </header>
            </div>
        )

        
    }
}

export default TodoForm;