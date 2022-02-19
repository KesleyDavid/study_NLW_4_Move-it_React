import React from 'react';

import * as S from './styles';

const Base: React.FC = () => {
  return (
    <S.Container>
      <img src="https://github.com/kesleydavid.png" alt="Kesley David" />

      <div>
        <strong>Kesley David</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </S.Container>
  );
}

export default Base;