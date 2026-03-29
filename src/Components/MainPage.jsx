import React, { useState } from "react";
import Token from "./Token";
import { GameResult } from "./GameResult";

export function MainPage() {
  const [showRules, setShowRules] = useState(false);
  const [step, setStep] = useState(1);
  const [userPick, setUserPick] = useState(null);

  const handlePick = (name, borderColor) => {
    setUserPick({ icon: name, color: borderColor });
    setStep(2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1f3756] to-[#141539] text-white">
      {/* HEADER */}
      <div className="flex flex-row justify-between items-center mb-12 w-full max-w-2xl border-2 border-[#606e85] rounded-xl p-4 md:p-6">
        <img src="images/logo.svg" alt="Logo" className="w-24 h-auto md:w-40" />
        <div className="px-5 py-2 bg-white rounded-lg flex flex-col justify-between items-center">
          <span className="text-lg text-[#4865f4] font-bold">SCORE</span>
          <span className="text-5xl text-[hsl(229,25%,31%)] font-bold">0</span>
        </div>
      </div>

      {/* GAME AREA */}
      {step === 1 ? (
        <div className="relative w-80 h-80 mt-12">
          <img src="images/bg-triangle.svg" alt="" className="w-full h-full" />

          <div
            onClick={() => handlePick("paper", "border-[#4865f4]")}
            className="cursor-pointer"
          >
            <Token
              icon="paper"
              color="border-[#4865f4]"
              positionClass="absolute -top-10 -left-10"
            />
          </div>

          <div
            onClick={() => handlePick("scissors", "border-[#ec9e0e]")}
            className="cursor-pointer"
          >
            <Token
              icon="scissors"
              color="border-[#ec9e0e]"
              positionClass="absolute -top-10 -right-10"
            />
          </div>

          <div
            onClick={() => handlePick("rock", "border-[#dc2e4e]")}
            className="cursor-pointer"
          >
            <Token
              icon="rock"
              color="border-[#dc2e4e]"
              positionClass="absolute -bottom-10 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      ) : (
        <GameResult userPick={userPick} setStep={setStep} />
      )}

      <div
        onClick={() => setShowRules(true)}
        className="absolute bottom-10 right-10 text-white px-5 py-2 rounded-lg border-2 border-white text-sm font-bold tracking-wide cursor-pointer"
      >
        RULES
      </div>

      {/* RULES MODAL */}
      {showRules && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center max-w-sm w-full">
            <div className="flex justify-between items-center w-full mb-8">
              <h2 className="text-3xl font-bold text-[hsl(229,25%,31%)]">
                RULES
              </h2>
              <button
                onClick={() => setShowRules(false)}
                className="text-gray-400 text-2xl"
              >
                ×
              </button>
            </div>
            <img src="images/image-rules.svg" alt="Rules" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
