import { useState, MouseEventHandler } from 'react'
import uniq from 'ramda/src/uniq'
import without from 'ramda/src/without'
import classNames from 'classnames'

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms))

const asyncForEach = async (array: any[], callback: Function) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const [WHITE, BLACK] = ['white', 'black']

const keys: [string, string][] = [
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
  const [playHistory, setPlayHistory] = useState([])
  const [activeKeys, setActiveKeys] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addActiveKey = (key: [string, string]) => {
    setActiveKeys(uniq([...activeKeys, key[1]]))
    setPlayHistory([...playHistory, key[1]])
  }
  const removeActiveKey = (key: [string, string]) =>
    setActiveKeys(without([key[1]], activeKeys))

  const addHighlight: (key: [string, string]) => MouseEventHandler = (key) => (
    e
  ) => {
    e && e.preventDefault()
    addActiveKey(key)
  }

  const removeHighlight: (key: [string, string]) => MouseEventHandler = (
    key
  ) => (e) => {
    e && e.preventDefault()
    removeActiveKey(key)
  }

  const handleInputValueChange = (event) => {
    const value: string = event.target.value.toUpperCase()
    setInputValue(value.replace(/[^cdefgab]/gi, ''))
  }

  const play = async (key: [string, string]) => {
    addHighlight(key)(null)
    await waitFor(1000)
    removeHighlight(key)(null)
  }

  const playAll = async () => {
    const values = inputValue.split('')
    await asyncForEach(values, async (value: string) => {
      const key = keys.find((k) => k[1] === value.toLowerCase())
      await play(key)
    })
  }

  return (
    <div className="piano-container">
      <ul className="piano">
        {keys.map((key: [string, string]) => {
          const classname = classNames(key, {
            active: activeKeys.includes(key[1]),
          })
          return (
            <li
              className={classname}
              key={`${key[0]} ${key[1]}`}
              onMouseUp={removeHighlight(key)}
              onMouseDown={addHighlight(key)}
              onMouseLeave={removeHighlight(key)}
              onMouseOut={removeHighlight(key)}
            ></li>
          )
        })}
      </ul>

      <p className="last-played-key">
        {activeKeys.length > 0 ? (
          activeKeys[activeKeys.length - 1].toUpperCase()
        ) : (
          <span>&nbsp;</span>
        )}
      </p>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <button onClick={() => playAll()}>PLAY</button>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        input {
          margin-right: 1em;
        }
        .piano-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .last-played-key {
          font-size: 3em;
          margin: 0.2em 0;
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
          border-right: 1px solid #999;
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
