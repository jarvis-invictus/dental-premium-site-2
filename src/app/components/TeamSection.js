import { teamMembers } from "../lib/data";

export default function TeamSection() {
  return (
    <section className="section-padding bg-dental-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge mb-3">Meet the Team</span>
          <h2 className="section-title">Our Expert Dentists</h2>
          <p className="section-subtitle">
            Skilled professionals dedicated to your oral health and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="card p-6 text-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-brand mx-auto mb-5 flex items-center justify-center text-white text-3xl font-bold">
                {member.name.charAt(3)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-dental-blue text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
