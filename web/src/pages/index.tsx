import ExperienceBar from '../components/ExperienceBar';

import Head from 'next/head';
import * as S from '../styles/app';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <S.Container>
        <ExperienceBar />
      </S.Container>
    </>
  )
}
