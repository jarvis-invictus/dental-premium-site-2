import { stats } from "../lib/data";

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-brand">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
    { id: 1, value: clinicConfig.stats.patients_treated, label: 'Happy Patients' },
    { id: 2, value: clinicConfig.stats.years_experience, label: 'Years of Experience' },
    { id: 3, value: '15+', label: 'Specialist Procedures' },
    { id: 4, value: clinicConfig.stats.google_rating, label: 'Google Rating' }
  ].map((stat) => (
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
