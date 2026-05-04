import Button from "./Button";

export default function Card({
  title,
  description,
  image,
  buttonText,
  children,
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-1">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-5">
        {title && (
          <h2 className="mb-2 text-xl font-semibold text-slate-900">
            {title}
          </h2>
        )}

        {description && (
          <p className="mb-4 text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}

        {children && (
          <div className="mb-4 text-sm leading-6 text-slate-600">
            {children}
          </div>
        )}

        {buttonText && <Button>{buttonText}</Button>}
      </div>
    </div>
  );
}