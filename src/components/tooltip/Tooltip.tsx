import { useState } from "react";
import { createPortal } from "react-dom";
interface Props {
  text: string | number;
  children: any;
}
const Tooltip = ({ text, children }: Props) => {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsvisible(true);
      }}
      onMouseLeave={() => {
        setIsvisible(false);
      }}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-[-100%] translate-y-[50%] bg-zinc-900 text-white rounded-[4px] z-50 p-[0.4rem] whitespace-nowrap text-[12px]">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
