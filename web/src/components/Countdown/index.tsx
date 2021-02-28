import React, { useState, useEffect } from 'react';

import * as S from './styles';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [active, setActive] = useState(false);
  
  // 1 - O que será feito (function)
  // 2 - Quando quero executar (changed active and time)
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  const minutes = Math.floor(time / 60); // Arredonda para baixo
  const seconds = time % 60; // Resto da divisão

  // split => divide em varios caracteres
  // padStart => se string não tiver 2 caracteres adiciona o '0' antes
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  return (
    <S.Container>
      <S.ContainerTime>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.ContainerTime>

      <S.Button
        type="button"
        onClick={startCountdown}
      >
        Iniciar um cliclo
      </S.Button>
    </S.Container>
  );
}

export default Countdown;