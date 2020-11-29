/* eslint-disable react/jsx-no-undef */
/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-11-29 13:57:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-29 14:52:45
 */
import React, { Component } from 'react';
import Modal from '../../components/modal/modal';
import './index.css'

class ModalExample extends Component {
    state = { 
        visible: false,
    }
    onChange=()=>{
        this.setState({visible: true})
    }
    handleOk = ()=>{
        console.log('点击了弹窗的确定');
        this.setState({visible: false})
    }
    onCancel = ()=>{
        console.log('点击了弹窗的取消');
        this.setState({visible: false})
    }
    render() { 
       
        return ( 
            <>
                <div className="b1">
                    <button onClick={this.onChange} className="b01">点击展开</button>
                </div>
                < Modal
                    visible={this.state.visible} 
                    title={'我的弹窗标题'} 
                    okText={'OK'}
                    onOk={this.handleOk}
                    onCancel={this.onCancel}
                    className={'box01-modal-wrapper'}
                >
                   <div>134886885566</div> 
                </ Modal>
            </>
         );
    }
}
 
export default ModalExample;