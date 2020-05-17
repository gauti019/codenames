import React from "react";
import "./App.css";
import "./custom.scss";
import * as randomWords from "random-words";

const colorList = [
    "red",
    "pink",
    "purple",
    "indigo",
    "blue",
    "cyan",
    "lime",
    "green",
    "orange",
    "brown",
    "black",
];
const tableRows = 5;
const tableColumns = 5;


function App() {
    const designCell = "p-2 m-1 col btn btn-lg btn-secondary";
    const doubleClickFn = (a, b) => {
        console.log(27, a, b);
    };
    const onClickFn = (a, b) => {
        console.log(28, a, b);
    };
    const boxHtml = (data, key) => {
        return (
            <div
                key={key}
                className={designCell}
                id={key}
                onClick={onClickFn}
                onDoubleClick={doubleClickFn}
            >
                {data}
            </div>
        );
    };
    const gridMaker = (data, rows=tableRows, columns=tableColumns) => {
        if (!Array.isArray(data)) return;
        var newArr = [];
        while(data.length) newArr.push(data.splice(0,3));
        return newArr;
    }

    const rowHtml = (data, key) => {
        if (!Array.isArray(data)) return;
        return (
            <div key={key} className="row">
                {data.map(boxHtml)}
            </div>
        );
    };

    const seperatorLines = (
        <>
            <p className="mt-4 border"></p>
            <p className="mt-4"></p>
            <p className="mt-4"></p>
        </>
    );

    // Generator for list
    const d = [[]];
    for (let i = 0; i < tableColumns*tableRows; i++) {
        d[i] = {
            word: randomWords(),
            color: colorList[parseInt(Math.random() * 10)],
        };
    }

    const payaHtml = (
        <div className="mt-4">
            {seperatorLines}
            <div className="d-flex">
                <main role="main" className="inner cover">
                    <div className="row p-1 m-1 border">
                        {/* <div className="col">{gridMaker(d).map(rowHtml)}</div> */}
                        <div className="col">{[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]].map(rowHtml)}</div>
                    </div>
                </main>
            </div>
            <div>
                <ol></ol>
            </div>
            {seperatorLines}
        </div>
    );

    return payaHtml;
}

export default App;
