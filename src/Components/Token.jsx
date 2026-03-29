export default function Token({ icon, color, positionClass }) {
  return (
    <div
      className={`
      rounded-full bg-white w-32 h-32 border-[16px] 
      flex items-center justify-center shadow-inner cursor-pointer 
      ${color} 
      ${positionClass ? positionClass : "relative"} 
    `}
    >
      <img src={`images/icon-${icon}.svg`} alt={icon} className="w-12 h-12" />
    </div>
  );
}
