import Head from 'next/head'
import Piano from '../components/Piano'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Piano Challenge</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="piano-wrapper">
        <Piano />
      </div>
      <div className="piano-wrapper">
        <Piano />
      </div>
    </main>

    <style jsx>{`
      .piano-wrapper {
        margin: 2em 0;
      }
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
