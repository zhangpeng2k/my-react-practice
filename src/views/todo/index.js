import React, { Component, Fragment } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    
    render(){
        return(<h1>todoList</h1>)
    }
}