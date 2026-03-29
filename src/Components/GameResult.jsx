import { useState } from "react";
import Token from "./Token";

export function GameResult({
  userPick,
  housePick,
  gameResult,
  resetGame,
  score,
}) {
  const [showRules, setShowRules] = useState(false);

  if (!userPick) return null;

  return (
    <div className="relative flex flex-col items-center w-full min-h-[60vh]">
      <div className="flex flex-row items-center justify-between w-full max-w-3xl mt-12 px-6">
        {/* PLAYER SIDE */}
        <div className="flex flex-col items-center gap-8">
          <p className="tracking-widest font-bold text-2xl">YOU PICKED</p>
          <Token
            icon={userPick.icon}
            color={userPick.color}
            positionClass="static"
          />
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
            <Token
              icon={housePick.icon}
              color={housePick.color}
              positionClass="static"
            />
          ) : (
            <div className="w-32 h-32 bg-black/20 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
}
