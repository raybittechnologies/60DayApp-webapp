

const Button = ({
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
  ...props              
}) => {

  const base = `
    inline-flex items-center justify-center gap-[10px]
    w-[207px] h-[70px]
    rounded-[32px]
    px-8 py-4
    font-heading font-semibold text-xl
    whitespace-nowrap
    border border-solid
    cursor-pointer
    transition-all duration-300
    active:scale-95
  `;


  const variants = {

    primary: `
      bg-brand-orange
      text-white
      border-brand-orange
      shadow-orange
      hover:bg-brand-orange-dark
      hover:shadow-orange-lg
    `,

    ghost: `
      bg-transparent
      text-white
      border-white/20
      hover:bg-white/5
      hover:border-white/30
    `,
  };

  return (
    <button
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}

      {showArrow && (
        <svg
          width="20" height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </button>
  );
};

export default Button;