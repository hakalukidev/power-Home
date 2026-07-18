import { AboutEditor } from '@/components/admin/AboutEditor';

export default function AdminAboutPage() {
  return (
    <div>
      <header>
        <h1 className="text-2xl font-semibold text-white">About Section</h1>
        <p className="mt-1 text-sm text-slate-400">
          Edit the company description shown in the About section.
        </p>
      </header>

      <div className="mt-6">
        <AboutEditor />
      </div>
    </div>
  );
}
