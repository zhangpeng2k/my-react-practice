import React, { Component, Fragment } from 'react'

import './index.css'

function FlexItems(props) {
    return(
        <li className={'flexItems'}>{props.value}</li>
    )
}

class FlexDemo extends Component {

    constructor(props){
        super(props)
        this.state = {
            list : [
                {
                    value:'1',
                    name:'HTML'
                },
                {
                    value:'2',
                    name:'CSS'
                },
                {
                    value:'3',
                    name:'JavaScript'
                },
                
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>Flex布局Demo</h1>
                <h3>flexDirection</h3>
                <p>flexDirection:'row'</p>
                <ul className="FlexDemo1" style={{display:"flex",flexDirection:'row'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <FlexItems key={index} value={item.name} ></FlexItems>
                            )
                        })
                    }
                </ul>
                <p>flexDirection:'row-reverse'</p>
                <ul className="FlexDemo2" style={{display:"flex",flexDirection:'row-reverse'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <FlexItems key={index} value={item.name} ></FlexItems>
                            )
                        })
                    }
                </ul>
                <p>flexDirection:'column'</p>
                <ul className="FlexDemo3" style={{display:"flex",flexDirection:'column'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <FlexItems key={index} value={item.name} ></FlexItems>
                            )
                        })
                    }
                </ul>
                <p>flexDirection:'column-reverse'</p>
                <ul className="FlexDemo4" style={{display:"flex",flexDirection:'column-reverse'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <FlexItems key={index} value={item.name} ></FlexItems>
                            )
                        })
                    }
                </ul>
                <h3>flexWrap</h3>
                <p>flexWrap: 'nowrap'</p>
                <ul className="FlexDemo4" style={{display:"flex",flexWrap: 'nowrap'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index} style={{display:'block',width:'140px',background:'#333',color:'#fff'}} value={item.name} >{item.name}</li>
                            )
                        })
                    }
                </ul>
                <p>flexWrap: 'wrap'</p>
                <ul className="FlexDemo4" style={{display:"flex",flexWrap: 'wrap'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index} style={{display:'block',width:'140px',background:'#333',color:'#fff'}} value={item.name} >{item.name}</li>
                            )
                        })
                    }
                </ul>
                <p>flexWrap: 'wrap-reverse'</p>
                <ul className="FlexDemo4" style={{display:"flex",flexWrap: 'wrap-reverse'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index} style={{display:'block',width:'140px',background:'#333',color:'#fff'}} value={item.name} >{item.name}</li>
                            )
                        })
                    }
                </ul>
                <h3>flex-flow</h3>
                <p>flexFlow: 'column wrap-reverse'</p>
                <ul className="FlexDemo4" style={{display:"flex",flexFlow: 'column wrap-reverse'}} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index} style={{display:'block',width:'140px',background:'#333',color:'#fff'}} value={item.name} >{item.name}</li>
                            )
                        })
                    }
                </ul>
                <h3>justify-content</h3>
                <p>justify-content: 'center'</p>
                <ul className="FlexDemo4" style={{display:"flex",
                justifyContent: 'center'
                }} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index} style={{display:'block',width:'80px',background:'#333',color:'#fff'}} value={item.name} >{item.name}</li>
                            )
                        })
                    }
                </ul>
                
                
            </div>
            
        )
    }
}

export default FlexDemo