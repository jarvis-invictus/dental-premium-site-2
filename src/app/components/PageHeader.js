export default function PageHeader({ badge, title, subtitle }) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-dental-white text-center">
      <div className="container-custom">
        {badge && <span className="badge mb-4">{badge}</span>}
        <h1
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className="section-subtitle">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
