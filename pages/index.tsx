import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >
          Welcome to
          <a
            href="https://www.netflix.com/pl/title/80014749"
            target="_blank"
            rel='noopener noreferrer'
          >
            {' Rick and Morty '}
          </a>
          page!
        </h1>

        <nav>
          <ul>
            <li>
              <Link href="/characters">
                <a>Characters</a>
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <a>Locations</a>
              </Link>
            </li>
            <li>
              <Link href="/episodes">
                <a>Episodes</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>

      <footer >
        {'2022 by '}
        <a
          href="https://home.cesarczyk.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          MCesarczyk
        </a>
      </footer>
    </div>
  )
}

export default Home;