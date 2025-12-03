function QuizComplete({
  user,
  score,
  setScore,
  isFinished,
  setIsFinished,
  isPlaying,
  setIsPlaying,
}) {
  const resetOnClick = () => {
    setIsPlaying(!isPlaying);
    setIsFinished(!isFinished);
    setScore(0);
  };

  return (
    <div>
      <p>Vel gert {user}!</p>
      <p>Þú fékkst {score} stig af 10!</p>
      <button type="reset" onClick={resetOnClick}>
        Reyna aftur?
      </button>
    </div>
  );
}

export default QuizComplete;
