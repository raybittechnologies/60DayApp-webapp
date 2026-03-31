/* ============================================================
   Button.jsx — Reusable button component
   Path: src/components/ui/Button.jsx
   
   PROPS:
   ┌─────────────┬──────────────────────────────┬───────────┐
   │ Prop        │ What it does                 │ Default   │
   ├─────────────┼──────────────────────────────┼───────────┤
   │ variant     │ "primary" = orange filled    │ "primary" │
   │             │ "ghost"   = transparent      │           │
   ├─────────────┼──────────────────────────────┼───────────┤
   │ showArrow   │ Shows → icon after the text  │ false     │
   ├─────────────┼──────────────────────────────┼───────────┤
   │ className   │ Extra classes from outside   │ ""        │
   ├─────────────┼──────────────────────────────┼───────────┤
   │ ...props    │ onClick, disabled, type, etc.│           │
   └─────────────┴──────────────────────────────┴───────────┘
   
   USAGE:
   <Button variant="primary">Book Free Call</Button>
   <Button variant="ghost" showArrow>See Our Work</Button>
   <Button variant="primary" onClick={() => alert('hi')}>Click Me</Button>
   ============================================================ */

const Button = ({
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
  ...props               // onClick, disabled, type, etc.
}) => {

  /* ── BASE CLASSES ────────────────────────────────────────────
     These apply to EVERY button, no matter the variant.
     
     inline-flex items-center justify-center
       → sits inline, centers content horizontally & vertically
     gap-[10px]
       → space between text and the optional arrow icon
     w-[207px] h-[70px]
       → fixed size from the Figma design spec
     rounded-[32px]
       → pill-like corners (matches the hero card radius)
     px-8 py-4
       → internal padding (even though size is fixed, good practice)
     font-heading font-semibold text-xl
       → Poppins, 600 weight, 20px
     whitespace-nowrap
       → never wraps text onto a second line
     border border-solid
       → every variant has a border (color differs per variant)
     cursor-pointer
       → shows hand cursor on hover
     transition-all duration-300
       → smooth animation for any hover/active state change
     active:scale-95
       → very slight shrink when clicked — tactile feel
  ─────────────────────────────────────────────────────────── */
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

  /* ── VARIANT CLASSES ─────────────────────────────────────────
     Only the things that DIFFER between variants go here.
  ─────────────────────────────────────────────────────────── */
  const variants = {

    /* Orange filled button — used on light backgrounds */
    primary: `
      bg-brand-orange
      text-white
      border-brand-orange
      shadow-orange
      hover:bg-brand-orange-dark
      hover:shadow-orange-lg
    `,

    /* Transparent button — used on dark/colored backgrounds */
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

      {/* Arrow icon — only rendered when showArrow={true} */}
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