import logo from "./logo.svg";
import "./App.css";

function App() {
  const court = () => {
    return (
      <>
        <svg viewBox="0,0,540,570" preserveAspectRatio="xMidYMid meet">
          <g className="title" transform="translate(5, 21)">
            <text className="roboto">LeBron James vs SAC on 01/13/2022</text>
          </g>
          <g className="footer" transform="translate(10, 560)">
            <text className="roboto">
              <tspan>2FG%: </tspan>
              <tspan fontWeight="800">100%</tspan>
              <tspan> (4/4)</tspan>
            </text>
          </g>
          <g className="footer" transform="translate(128, 560)">
            <text className="roboto">
              <tspan>3 FG%: </tspan>
              <tspan fontWeight="800">50%</tspan>
              <tspan> (3/6)</tspan>
            </text>
          </g>
          <g className="footer" transform="translate(240, 560)">
            <text className="roboto">
              <tspan>Overall %: </tspan>
              <tspan fontWeight="800">70%</tspan>
              <tspan> (7/10)</tspan>
            </text>
          </g>
          <g>
            <g className="legend" transform="translate(520, 560)">
              <text textAnchor="end" className="roboto">
                Miss
              </text>
              <path
                transform="translate(-44, -6)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                strokeWidth="3"
              ></path>
              <text
                transform="translate(-80, 0)"
                textAnchor="end"
                className="roboto"
              >
                Made
              </text>
              <path
                transform="translate(-130, -6)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
          </g>
          <g className="court" transform="translate(20, 50)">
            <rect
              fill="rgba(253, 185, 39, .75)
              "
              x="-20"
              y="-20"
              width="540"
              height="510"
              style={{ backgroundColor: "red" }}
            ></rect>
            <g className="markings">
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M470,0v140"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M30,0v140"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M330,0v190"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M170,0v190"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M310,0v190"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M190,0v190"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M330,190H170"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M280,40h-60"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M250,40v2.5"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M290,40v10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M210,40v10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M250,42.5c4.1,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5s-7.5-3.4-7.5-7.5S245.9,42.5,250,42.5z"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M0,0v470h190c0-33.1,26.9-60,60-60s60,26.9,60,60h190V0H0z"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M250,410c-33.1,0-60,26.9-60,60h40c0-11,9-20,20-20s20,9,20,20h40C310,436.9,283.1,410,250,410z"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M250,450c-11,0-20,9-20,20h40C270,459,261,450,250,450z"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M310,190c0,33.1-26.9,60-60,60s-60-26.9-60-60c0,33.1,26.9,60,60,60S310,223.1,310,190z"
              ></path>
              <path
                className="mark dash-array"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M310,190c0-33.1-26.9-60-60-60s-60,26.9-60,60c0-33.1,26.9-60,60-60S310,156.9,310,190z"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M290,50c0,22.1-17.9,40-40,40s-40-17.9-40-40c0,22.1,17.9,40,40,40S290,72.1,290,50z"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M469.8,139.9c-49.7,121.4-188.3,179.6-309.7,129.9c-59-24.1-105.8-70.9-129.9-129.9 c49.7,121.4,188.3,179.6,309.7,129.9C398.9,245.7,445.7,198.9,469.8,139.9z"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M140,0v5"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M359.9,0v5"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M470,281.6h30"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M0,286.7h30"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M170,69.8h-10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M170,79.9h-10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M170,109.9h-10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M170,140h-10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M340,69.8h-10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M340,79.9h-10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M340,109.9h-10"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M0,140h30"
              ></path>
              <path
                className="mark"
                fill="none"
                stroke="#552583"
                strokeWidth="2.6"
                d="M470,139.9h30"
              ></path>
            </g>
            <g className="shot">
              <title>
                MISS Middleton 26' 3PT Step Back Jump Shot Q1 - 11:11
              </title>
              <path
                transform="translate(26.000000000000014, 172.99999999999997)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>Antetokounmpo 1' Dunk (2 PTS) Q1 - 10:51</title>
              <path
                transform="translate(260, 61)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>MISS Antetokounmpo 26' 3PT Jump Shot Q1 - 10:22</title>
              <path
                transform="translate(358, 285)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>
                Matthews 26' 3PT Jump Shot (3 PTS) (Antetokounmpo 1 AST) Q1 -
                09:59
              </title>
              <path
                transform="translate(141, 289)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>MISS Nwora 27' 3PT Jump Shot Q1 - 09:43</title>
              <path
                transform="translate(75, 250)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>
                Nwora 4' Driving Floating Jump Shot (2 PTS) (Middleton 1 AST) Q1
                - 08:52
              </title>
              <path
                transform="translate(245, 86)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>
                Nwora 25' 3PT Jump Shot (5 PTS) (Middleton 2 AST) Q1 - 08:25
              </title>
              <path
                transform="translate(382, 267)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>
                Antetokounmpo 6' Turnaround Fadeaway (4 PTS) Q1 - 08:00
              </title>
              <path
                transform="translate(200, 79)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>
                Middleton 27' 3PT Pullup Jump Shot (3 PTS) (Nwora 1 AST) Q1 -
                07:41
              </title>
              <path
                transform="translate(235, 315)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
            <g className="shot">
              <title>
                Middleton 9' Driving Floating Jump Shot (5 PTS) (Antetokounmpo 2
                AST) Q1 - 07:09
              </title>
              <path
                transform="translate(158, 58)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                strokeWidth="3"
              ></path>
            </g>
          </g>
          <g className="watermark" transform="translate(520, 520)">
            <text
              textAnchor="end"
              dy="-5"
              dx="-5"
              fontSize="22px"
              fontWeight="600"
              className="roboto"
            >
              BasketballCenter
            </text>
          </g>
        </svg>
      </>
    );
  };

  return <div className="App">{court()}</div>;
}

export default App;
