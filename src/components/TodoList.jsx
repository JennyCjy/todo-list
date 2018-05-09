import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends React.Component {

    constructor(){
        super();
        this.items =[];
    }
    handlerAddItem(name){
        console.log("Add new item",name);
        this.items.push({name: name, done: false})
    }
    render() {
         this.items = [
            {
                name: 'item 1',
                done: false
            },
            {
                name: 'item 2',
                done: false
            },
            {
                name: 'item 3',
                done: true
            },
            {
                name: 'item 4',
                done: false
            }
        ];
        return (
            <div>
                <ul>
                    {this.items.map((item,index) => <TodoItem key={index} name={item.name} done={item.done} />)}
                </ul>
                <TodoInput onAddItem={this.handlerAddItem}/>
            </div>
        );
    }
}

export default TodoList;