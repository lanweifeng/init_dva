import React, { Component } from 'react';
import { Link } from 'dva/router'

class BBB extends Component{
    render(){
        return(
            <div>
                <p>
                    BBB页面
                </p>
                <Link to={'/aaa'}>去AAA</Link>
                <br />
                <Link to={'/ccc'}>去CCC</Link>
            </div>
        )
    }
}

export default BBB;