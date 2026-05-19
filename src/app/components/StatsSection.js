import { stats } from "../lib/data";

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-brand">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-primary-100 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
