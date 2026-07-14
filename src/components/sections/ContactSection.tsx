type ContactSectionProps = {
  email: string;
};

export function ContactSection({ email }: ContactSectionProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-slate-400">Reach us at {email}</p>
      </div>
    </section>
  );
}
