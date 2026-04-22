import Button from "./Button";

export default function Navbar() {
  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <h1 className="text-xl font-bold text-purple-700">MyApp</h1>

      <div className="hidden gap-6 md:flex">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium text-slate-700 transition hover:text-purple-700"
          >
            {link}
          </a>
        ))}
      </div>

      <Button variant="secondary">Sign In</Button>
    </nav>
  );
}