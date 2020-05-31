const Piano = () => {
  return (
    <div>
      <ul className="piano">
        <li className="white c"></li>
        <li className="black cs"></li>
        <li className="white d"></li>
        <li className="black ds"></li>
        <li className="white e"></li>
        <li className="white f"></li>
        <li className="black fs"></li>
        <li className="white g"></li>
        <li className="black gs"></li>
        <li className="white a"></li>
        <li className="black as"></li>
        <li className="white b"></li>
      </ul>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        ul {
          height: 18.875em;
          width: 34em;
          margin: 0 auto;
          position: relative;
          border: none;
        }
        li {
          margin: 0;
          padding: 0;
          list-style: none;
          position: relative;
          float: left;
        }
        .white {
          height: 16em;
          width: 4em;
          z-index: 1;
          border: 1px solid #bbb;
        }
        .white:active {
          border-top: 1px solid #777;
          border-left: 1px solid #999;
          border-bottom: 2px solid #999;
        }
        .black {
          height: 8em;
          width: 2em;
          margin: 0 0 0 -1em;
          z-index: 2;
          border: 1px solid #000;
          background: linear-gradient(45deg, #222 0%, #555 100%);
        }
        .black:active {
          background: linear-gradient(to right, #444 0%, #222 100%);
        }
        .a,
        .g,
        .d,
        .b,
        .e {
          margin: 0 0 0 -1em;
        }
      `}</style>
    </div>
  )
}

export default Piano
