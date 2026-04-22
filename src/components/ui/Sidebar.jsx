export default function Sidebar() {
  const items = ["Dashboard", "Profile", "Messages", "Settings"];

  return (
    <aside className="min-h-screen w-64 bg-slate-900 p-6 text-white">
      <h2 className="mb-8 text-2xl font-bold">Menu</h2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-slate-800"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}