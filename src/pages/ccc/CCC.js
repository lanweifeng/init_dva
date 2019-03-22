import React, { Component } from 'react'
import { Link } from 'dva/router'

class CCC extends Component{
    render(){
        return(
            <div>
                <p>
                    ccc页面
                </p>
                <Link to={'/aaa'}>去AAA</Link>
                <br />
                <Link to={'/bbb'}>去BBB</Link>
            </div>
        )
    }
}

export default CCC;