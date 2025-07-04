import type { Employee } from "@/lib/types";
import { Dashboard } from "@/components/dashboard/dashboard";
import ProtectedRoute from "@/components/auth/protected-route";

async function fetchEmployees(): Promise<Employee[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employees`);
  if (!res.ok) return [];
  return res.json();
}

export default async function HomePage() {
  const employees = await fetchEmployees();

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto grid gap-10 mt-10 w-full">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-5">
          Skills Matrix Dashboard
        </h1>
        <Dashboard employees={employees} />
      </div>
    </ProtectedRoute>
  );
}
