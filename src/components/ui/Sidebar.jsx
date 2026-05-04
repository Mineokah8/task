export default function Sidebar({
  items = [],
  activeItem,
  onSelectItem,
  isOpen = true,
}) {
  return (
    <aside
      className={`h-screen w-64 bg-slate-900 p-6 text-white transition-all duration-300 ${
        isOpen ? "block" : "hidden"
      } md:block`}
    >
      <h2 className="mb-8 text-2xl font-bold">Menu</h2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => onSelectItem(item)}
              className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                activeItem === item
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}