import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';

import * as S from '../styles/app';

export default function Home() {
  return (
    <S.Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>
          
        </div>
      </section>
    </S.Container>
  )
}
