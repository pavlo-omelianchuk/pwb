import { useEffect, useState } from 'react';

export const playSound = () => {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    setPlaying(true);
    // playing ? audio.play() : audio.pause();
    return setPlaying(false);
  }, [playing]);

  const audio = new Audio(
    'https://cdn.pixabay.com/download/audio/2021/08/09/audio_9659856a03.mp3?filename=cha-ching-7053.mp3',
  );
  audio.play();
};
