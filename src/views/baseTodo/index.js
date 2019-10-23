import React, { Component, Fragment } from 'react'

import TodoItems from './item'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                // {
                //     value:'名字',
                //     key:'1'   
                // }
            ],
            text: '实现双向绑定'
        }
        // 官方建议 在这里 bind(this)  onChange事件里就不用显式声明e
        this.handleChange = this.handleChange.bind(this)

        // 即使不使用 e 但只要是在onClick事件中调用的函数，都要绑定this
        this.addTodo = this.addTodo.bind(this)

        // this.deleteItems = this.deleteItems.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount')

    }
    addTodo() {
        let text = this.state.text
        let newList = this.state.list.concat([{
            value: text,
        }])
        this.setState({
            list: newList
        }, () => {
            console.log(this.state.list)
        })
    }

    handleChange(e) {
        console.log(e);

        console.log(e.target.value);
        this.setState({
            text: e.target.value
        }, () => {
            console.log(this.state.text);

        })
    }


    deleteItems(index) {
        let newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        }, () => {
            console.log(this.state.list)
        })
    }

    render() {
        return (<div style={{ minHeight: '400px', background: '#aeaeae' }}>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
            <button type="button" onClick={this.addTodo}>添加</button>
            <p>{this.state.text}</p>
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <div key={index}>
                                <TodoItems key={index} index={index}
                                    // deleteAction={this.deleteItems(index)}
                                    value={item.value}></TodoItems>
                                <button onClick={e => this.deleteItems(index)}>删除</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>)
    }
}

