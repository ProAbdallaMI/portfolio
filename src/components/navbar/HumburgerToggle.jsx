// HamburgerToggle.jsx

export default function HamburgerToggle({ className = "", onClick, isOpen }) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className={`z-20 w-4 h-4 flex flex-col justify-between items-center ${className}`}
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0"}`}
      />
      <span
        className={`block h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out
          ${isOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-0 rotate-0"}`}
      />
    </button>
  );
}
