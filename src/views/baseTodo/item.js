import React, { Component, Fragment } from 'react'

import PropTypes from 'prop-types';

class TodoItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
        this.changeStatus = this.changeStatus.bind(this)
    }

    changeStatus() {
        let newStatus = this.state.status
        this.setState({
            status: !newStatus
        }, () => {
            console.log(this.state.status);

        })
    }

    render() {
        return (
            <li style={{display:'flex'}}>
                <input type="checkbox" checked={this.state.status} onChange={() => this.changeStatus()} />

                <p style={this.state.status?{textDecoration:'line-through',margin:'0'}:{margin:'0'}}>{this.props.value}</p>

                {/* <button type="button"
                    onClick={()=>this.props.deleteItem(this.props.index)}
                >删除</button> */}
            </li>
        )
    }

}

// 这里进行校验
TodoItems.propTypes = {
    // isRequired表示必须传递
    value: PropTypes.string.isRequired,
    index: PropTypes.number,
}
// 这里设置默认值
TodoItems.defaultProps = {
    defaultObj: "默认"
}

export default TodoItems