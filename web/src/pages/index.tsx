import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';

import Head from 'next/head';

import * as S from '../styles/app';

export default function Home() {
  return (
    <S.Container>

      <Head>
        <title>Inicio | movie.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          
        </div>
      </section>
    </S.Container>
  )
}
