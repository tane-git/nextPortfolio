// CSS global
import '../styles/globals.css'
import '../styles/media.css'
import '../styles/main.css'
import '../styles/milky.css'

// Next stuff
import Head from 'next/head'

// Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tane</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet"/>
        <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp