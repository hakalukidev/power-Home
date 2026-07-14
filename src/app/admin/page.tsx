import { AboutEditor } from "@/components/admin/AboutEditor";
import { AdminAuthGuard } from "@/components/admin/AdminAuthGuard";
import { ContactEditor } from "@/components/admin/ContactEditor";
import { HomeEditor } from "@/components/admin/HomeEditor";
import { ProductsEditor } from "@/components/admin/ProductsEditor";

export default function AdminPage() {
  return (
    <AdminAuthGuard>
      <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
        <div className="mx-auto max-w-5xl space-y-8">
          <header>
            <h1 className="text-3xl font-semibold">Admin Panel</h1>
            <p className="mt-2 text-slate-400">Manage landing page content from here.</p>
          </header>

          <section className="grid gap-6 lg:grid-cols-2">
            <HomeEditor />
            <ProductsEditor />
            <ContactEditor />
            <AboutEditor />
          </section>
        </div>
      </main>
    </AdminAuthGuard>
  );
}
