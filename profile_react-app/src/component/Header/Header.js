import React from "react";
import { Grid } from "@material-ui/core"
import './style.css';
const Header = () => {
    return (
        <div className="f-row header-wrapper">
            <div>
                <div className="f-row">
                    <div className="header-th">이름</div>
                    <div className="header-td"> 이종성</div>
                </div>
                <div className="f-row">
                    <div className="header-th">이메일</div>
                    <div className="header-td">ldiablo90@gmail.com</div>
                </div>
                <div className="f-row">
                    <div className="header-th">연락처</div>
                    <div className="header-td">010-4247-3162</div>
                </div>
                <div className="f-row">
                    <div className="header-th">깃허브</div>
                    <div className="header-td">github.com/Ldiablo90</div>
                </div>
                <div className="f-row">
                    <div className="header-th">T-story</div>
                    <div className="header-td">lian-is-clone.tistory.com</div>
                </div>
            </div>
            <div>
                이미지
            </div>
        </div>
    )
}

export default Header;