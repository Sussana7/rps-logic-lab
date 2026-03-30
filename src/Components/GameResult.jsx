import Token from "./Token";

export function GameResult({ userPick, housePick, gameResult, resetGame }) {
  if (!userPick) return null;

  const userWins = gameResult === "You win!";
  const houseWins = gameResult === "You lose!";

  const winnerRipple = "shadow-winner transition-shadow duration-500";

  return (
    <div className="relative flex flex-col items-center w-full min-h-[60vh]">
      <div className="flex flex-row items-center justify-between w-full max-w-3xl mt-12 px-6">
        {/* PLAYER SIDE */}
        <div className="flex flex-col items-center gap-8">
          <p className="tracking-widest font-bold">YOU PICKED</p>

          <div className={`rounded-full ${userWins ? winnerRipple : ""}`}>
            <Token
              icon={userPick.icon}
              color={userPick.color}
              positionClass="static"
            />
          </div>
        </div>

        {/* WIN/LOSS MESSAGE (Only shows if gameResult exists) */}
        {gameResult && (
          <div className="flex flex-col items-center gap-4 mx-8">
            <h1 className="text-5xl font-bold uppercase">{gameResult}</h1>
            <button
              onClick={resetGame}
              className="bg-white text-[#141539] px-10 py-3 rounded-lg font-bold"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
        {/* HOUSE SIDE */}
        <div className="flex flex-col items-center gap-8">
          <p className="tracking-widest font-bold text-2xl">THE HOUSE PICKED</p>
          {housePick ? (
            <div className={`rounded-full ${houseWins ? winnerRipple : ""}`}>
              <Token
                icon={housePick.icon}
                color={housePick.color}
                positionClass="static"
              />
            </div>
          ) : (
            <div className="w-32 h-32 bg-black/20 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
}
