export default function Token({ icon, color, positionClass }) {
  return (
    <div className={`absolute cursor-pointer ${positionClass}`}>
      <div
        className={`w-32 h-32 bg-white rounded-full flex items-center justify-center border-[15px] ${color} shadow-[inset_0_6px_rgba(0,0,0,0.2),0_8px_rgba(0,0,0,0.2)]`}
      >
        <img src={`images/icon-${icon}.svg`} alt={icon} className="w-12" />
      </div>
    </div>
  );
}
