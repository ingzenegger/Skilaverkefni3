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
      {score >= 5 ? (
        <div>
          <p>Vel gert {user || "snillingur"} 🎉</p>
          <p>Þú fékkst {score} stig af 10!</p>
        </div>
      ) : (
        <div>
          <p>Þú fékkst {score} stig af 10</p>
          <p>Þú getur gert betur {user} 🤔</p>
        </div>
      )}
      <button type="reset" onClick={resetOnClick}>
        Reyna aftur?
      </button>
    </div>
  );
}

export default QuizComplete;
