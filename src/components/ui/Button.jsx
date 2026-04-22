export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
    outline: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}