export default function Button({
  className,
  buttonName,
  buttonType,
  href,
  onClick,
}) {
  if (buttonType === "socialMedia") {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonName}
      </a>
    );
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {buttonName}
    </button>
  );
}
