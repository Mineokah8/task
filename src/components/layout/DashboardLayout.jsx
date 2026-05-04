"use client";

import { useState } from "react";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";
import Card from "../ui/Card";
import StatsCard from "../ui/StatsCard";

const sidebarItems = ["Dashboard", "Profile", "Messages", "Settings"];

const stats = [
  {
    title: "Total Users",
    value: "1,240",
    description: "Active platform users",
  },
  {
    title: "Revenue",
    value: "$8,450",
    description: "This month's earnings",
  },
  {
    title: "Orders",
    value: "320",
    description: "Completed orders",
  },
];

export default function DashboardLayout() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar
        items={sidebarItems}
        activeItem={activeItem}
        onSelectItem={setActiveItem}
        isOpen={isSidebarOpen}
      />

      <div className="flex flex-1 flex-col">
        <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 p-8">
          <h1 className="mb-8 text-3xl font-bold text-slate-900">
            {activeItem}
          </h1>

          <section className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </section>

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Recent Activity">
              <p>You have 5 new messages and 3 pending tasks.</p>
            </Card>

            <Card title="Performance">
              <p>Your dashboard activity increased by 24% this week.</p>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}