import React from 'react';

import * as S from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <S.Header>
      <S.Xp>0 xp</S.Xp>
      <S.Div>
        <div style={{ width: '50%' }} />
        <span style={{ left: '50%' }}>
          300 xp
        </span>
      </S.Div>
      <S.Xp>600 xp</S.Xp>
    </S.Header>
  );
}

export default ExperienceBar;