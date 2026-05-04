export default function StatsCard({ title, value, description }) {
    return(
        <div className ="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">{title}</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">{value}</h2>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
        </div>
    );
}