import { ContactEditor } from '@/components/admin/ContactEditor';

export default function AdminContactPage() {
  return (
    <div>
      <header>
        <h1 className="text-2xl font-semibold text-white">Contact Info</h1>
        <p className="mt-1 text-sm text-slate-400">
          Update the phone, email, and depot addresses shown in the Contact section.
        </p>
      </header>

      <div className="mt-6">
        <ContactEditor />
      </div>
    </div>
  );
}
