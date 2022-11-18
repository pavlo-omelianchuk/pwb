export const playSound = () => {
  const audio = new Audio(
    'https://cdn.pixabay.com/download/audio/2021/08/09/audio_9659856a03.mp3?filename=cha-ching-7053.mp3',
  );
  audio.play();
};
