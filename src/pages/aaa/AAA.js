import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Button } from 'antd'


class AAA extends Component{
    render(){
        return (
            <div>
                <p>
                    AAA页面
                </p>
                <Link to={'/bbb'}>
                    <Button type={'primary'} icon={'link'}>
                        去BBB
                    </Button>
                </Link>
                <br />
                <Link to={'/ccc'}>
                    <Button type={'primary'} icon={'link'}>
                        去CCC
                    </Button>
                </Link>
            </div>
        )
    }
}

export default AAA;