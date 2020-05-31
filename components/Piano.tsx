const [WHITE, BLACK] = ['white', 'black']

const keys = [
  [WHITE, 'c'],
  [BLACK, 'cs'],
  [WHITE, 'd'],
  [BLACK, 'ds'],
  [WHITE, 'e'],
  [WHITE, 'f'],
  [BLACK, 'fs'],
  [WHITE, 'g'],
  [BLACK, 'gs'],
  [WHITE, 'a'],
  [BLACK, 'as'],
  [WHITE, 'b'],
]

const Piano = () => {
  return (
    <div className="piano-container">
      <ul className="piano">
        {keys.map((key) => {
          const classname = `${key[0]} ${key[1]}`
          return <li className={classname} key={classname}></li>
        })}
      </ul>

      <p className="last-played-key">C</p>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .piano-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .last-played-key {
          font-size: 3em;
          margin: 0.2em 0 0;
          color: #222;
          display: block;
        }
        .status {
          font-size: 0.2em;
          color: grey;
        }
        ul {
          margin: 0 auto;
          padding: 0;
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
        .white.active {
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
        .black.active {
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
