import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png";

// 存储棋盘的数据
let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    // 第几次下棋
    let [count, setCount] = useState(0);
    // 锁定棋盘
    let [lock, setLock] = useState(false);

    // 元素引用
    let titleRef = useRef(null);
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    const boxArr = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

    const toggle = (e, num) => {
        if (!lock) {
            if (count % 2 == 0) {
                e.target.innerHTML = `<img src="${circle}" />`;
                data[num] = "o";
            } else {
                e.target.innerHTML = `<img src="${cross}" />`;
                data[num] = "x";
            }
            setCount(++count);
            checkWin();
        }
    };

    const checkWin = () => {
        if (data[0] == data[1] && data[1] == data[2] && data[2] != "") {
            won(data[2]);
        } else if (data[3] == data[4] && data[4] == data[5] && data[5] != "") {
            won(data[5]);
        } else if (data[6] == data[7] && data[7] == data[8] && data[8] != "") {
            won(data[8]);
        } else if (data[0] == data[3] && data[3] == data[6] && data[6] != "") {
            won(data[6]);
        } else if (data[1] == data[4] && data[4] == data[7] && data[7] != "") {
            won(data[7]);
        } else if (data[2] == data[5] && data[5] == data[8] && data[8] != "") {
            won(data[8]);
        } else if (data[0] == data[4] && data[4] == data[8] && data[8] != "") {
            won(data[8]);
        } else if (data[2] == data[4] && data[4] == data[6] && data[6] != "") {
            won(data[6]);
        }
    };

    const won = (winner) => {
        setCount(0);
        setLock(true);
        titleRef.current.innerHTML = `恭喜 <img src="${
            winner == "o" ? circle : cross
        }" /> 获得胜利`;
    };

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `<span>React + vite</span> 井字棋游戏`;
        boxArr.map((item) => (item.current.innerHTML = ""));
    };

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>
                <span>React + vite</span> 井字棋游戏
            </h1>
            <div className="board">
                <div className="row1">
                    <div
                        className="boxes"
                        ref={box0}
                        onClick={(e) => toggle(e, 0)}
                    ></div>
                    <div
                        className="boxes"
                        ref={box1}
                        onClick={(e) => toggle(e, 1)}
                    ></div>
                    <div
                        className="boxes"
                        ref={box2}
                        onClick={(e) => toggle(e, 2)}
                    ></div>
                </div>
                <div className="row2">
                    <div
                        className="boxes"
                        ref={box3}
                        onClick={(e) => toggle(e, 3)}
                    ></div>
                    <div
                        className="boxes"
                        ref={box4}
                        onClick={(e) => toggle(e, 4)}
                    ></div>
                    <div
                        className="boxes"
                        ref={box5}
                        onClick={(e) => toggle(e, 5)}
                    ></div>
                </div>
                <div className="row3">
                    <div
                        className="boxes"
                        ref={box6}
                        onClick={(e) => toggle(e, 6)}
                    ></div>
                    <div
                        className="boxes"
                        ref={box7}
                        onClick={(e) => toggle(e, 7)}
                    ></div>
                    <div
                        className="boxes"
                        ref={box8}
                        onClick={(e) => toggle(e, 8)}
                    ></div>
                </div>
            </div>
            <button className="reset" onClick={reset}>
                重置
            </button>
        </div>
    );
};

export default TicTacToe;
