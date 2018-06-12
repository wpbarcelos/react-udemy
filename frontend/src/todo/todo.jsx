import React, {Component} from "react"
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


const URL= 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props)
    {
        super(props)

        this.state = { description : '', list: []}
        this.handleAdd  = this.handleAdd.bind(this)
        this.handleChange  = this.handleChange.bind(this)
        this.handleRemove  = this.handleRemove.bind(this)
        
        this.refresh();
    }

    refresh()
    {
        axios.get(`${URL}?sort=createdAt`)
            .then( (resp)=>{
                this.setState({...this.state, list: resp.data })
            })
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }

    handleRemove(todo){
        console.log(todo)
        axios.delete(URL+'/'+todo._id)
            .then((resp)=>{
                console.log(resp)
                this.refresh();
            })
    }

    handleAdd(){
        console.log(this.state.description);

        const description = this.state.description;

        axios.post(URL, {description})
            .then((resp)=>{
                this.setState({...this.state, description: '' })
                this.refresh();

            });
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="cadastro"></PageHeader>

                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                     ></TodoForm>

                <TodoList list={this.state.list} handleRemove={this.handleRemove} />
            </div>
        )
    }
}