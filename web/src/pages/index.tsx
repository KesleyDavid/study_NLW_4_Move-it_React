import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import * as S from '../styles/app';

export default function Home() {
  return (
    <S.Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>
          
        </div>
      </section>
    </S.Container>
  )
}
