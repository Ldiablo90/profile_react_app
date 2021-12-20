import React from "react";
import style from './style';
const Header = () => {
    var cssStyle = style();
    return (
        <div>
            <div>
                <div>
                    <div className={cssStyle.label}>이름</div>
                    <div className={cssStyle.value}> 이종성</div>
                </div>
                <div>
                    <div className={cssStyle.label}>이메일</div>
                    <div className={cssStyle.value}>ldiablo90@gmail.com</div>
                </div>
                <div>
                    <div className={cssStyle.label}>연락처</div>
                    <div className={cssStyle.value}>010-4247-3162</div>
                </div>
                <div>
                    <div className={cssStyle.label}>깃허브</div>
                    <div className={cssStyle.value}>github.com/Ldiablo90</div>
                </div>
                <div>
                    <div className={cssStyle.label}>T-story</div>
                    <div className={cssStyle.value}>lian-is-clone.tistory.com</div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Header;