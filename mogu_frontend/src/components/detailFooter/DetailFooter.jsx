import React from 'react'
import IconItem from '../iconItem/IconItem'
import './detailFooter.css'
import { connect } from 'react-redux'
import { changeGoodsIsCollect_AC, changeGoodsUnCollect_AC } from '../../pages/shopping/store/actionCreators'

function DetailFooter(props) {
    const { id, collect } = props
    const { handleGoodsIsCollect, handleGoodsUnCollect } = props

    return (
        <div className="detail-footer-wrap">
            <div className="icon-item-wrap shop">
                <span className="icon iconfont">&#xe689;</span>
                <span className="icon-item-title">店铺</span>
            </div>
            <div className="icon-item-wrap service">
                <span className="icon iconfont">&#xe63f;</span>
                <span className="icon-item-title">客服</span>
            </div>
            <div
                className="icon-item-wrap collect"
                onClick={() => {
                    collect ? handleGoodsUnCollect(id) : handleGoodsIsCollect(id)
                }
                }
            >
                <span className="icon iconfont"
                    style={{ color: collect ? '#ff5777' : '' }}
                    dangerouslySetInnerHTML={{ __html: collect ? '&#xe605;' : '&#xe647;' }}></span>
                <span className="icon-item-title">收藏</span>
            </div>
            <span className="add-to-cart">加入购物车</span>
            <span className="purchases-immediately">立即购买</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        // 收藏
        handleGoodsIsCollect: (id) => {
            dispatch(changeGoodsIsCollect_AC(id))
        },
        // 取消收藏
        handleGoodsUnCollect: (id) => {
            dispatch(changeGoodsUnCollect_AC(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailFooter);