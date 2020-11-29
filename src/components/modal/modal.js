/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-11-16 21:45:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-29 14:33:59
 */

import React,{ Component } from 'react';

import  './modal.css'

/**
 * @name: 
 * @test: test font
 * @msg:  title?:string | React.ReactNode; //弹窗标题
 * visible?: boolean;
 * onOk?: onOk?: (e: React.MouseEvent<HTMLElement>) => void; //点击确定回调
 * onCancel?: (e: React.MouseEvent<HTMLElement>) => void; //点击取消回调
 * okText?: React.ReactNode; // 确认按钮文字
 * cancelText?: React.ReactNode; //取消按钮文字
 * className?: string; 
 * 
 * @param {*}
 * @return {*}
 */
class Modal extends Component {
    
    render() { 
        console.log(this.props)
        const { visible,className, title,onOk, okText='确认',onCancel,cancelText,children }=this.props;
        return ( 
       
            <div className={`wrap ${className}`} style={{display:visible?'flex':'none'}}>
                <div className="xBox">
                    <h2>{title}</h2>
                    <div className="p1">
                       { children }
                    </div>
                    <div className="btn">
                        <div className="box3">
                            <button onClick={onOk}>{okText}</button>
                            <button onClick={onCancel} className="lBtn">{cancelText || '取消'}</button>
                        </div>
                    </div>
                </div>
            </div>
       
        
         );
    }
}
 
export default Modal;
 