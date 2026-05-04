export default function Button({
  children,
  variant = "primary",
  className = "",
  active = false,
  ...props
}) {
  const baseStyles =
    "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200";

 const variants = {
    primary: active
      ? "bg-purple-700 text-white"
      : "bg-purple-600 text-white hover:bg-purple-700",
    secondary:active
      ? "bg-slate-300 text-slate-900"
      : "bg-slate-200 text-slate-800 hover:bg-slate-300",
    outline:active
      ? "border border-purple-600 text-purple-600 bg-purple-50"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
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