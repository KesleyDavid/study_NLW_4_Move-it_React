import React, { useState, useEffect } from 'react';

import * as S from './styles';

// Saber formato exato do timeout countdown
let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  
  // 1 - O que será feito (function)
  // 2 - Quando quero executar (changed active and time)
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);

  const minutes = Math.floor(time / 60); // Arredonda para baixo
  const seconds = time % 60; // Resto da divisão

  // split => divide em varios caracteres
  // padStart => se string não tiver 2 caracteres adiciona o '0' antes
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    console.log('start');
    setIsActive(true);
  }

  function resetCountdown() {
    console.log('reset');
    clearTimeout(countdownTimeout);
    setIsActive(false);
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
        onClick={ isActive ? resetCountdown : startCountdown }
        propActive={ isActive }
      >
        { isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo' }
      </S.Button>
      
    </S.Container>
  );
}

export default Countdown;