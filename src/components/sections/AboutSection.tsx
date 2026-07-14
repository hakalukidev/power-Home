type AboutSectionProps = {
  text: string;
};

export function AboutSection({ text }: AboutSectionProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/70 p-10">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-4 text-slate-400">{text}</p>
      </div>
    </section>
  );
}
