import { notFound } from "next/navigation";
import {} from "@/components/employees/card/employee-skill-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import EmployeeEditHeaderInfo from "@/components/employees/edit/employee-edit-header-info";
import EmployeeEditPersonalInfo from "@/components/employees/edit/employee-edit-personal-info";
import EmployeeEditCertificates from "@/components/employees/edit/employee-edit-certificates";
import EmployeeEditSkills from "@/components/employees/edit/employee-edit-skills-section";
import { getEmployeeById } from "@/lib/employees";

export default async function EditEmployeeProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const employee = await getEmployeeById(id);

  if (!employee) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Employees", href: "/employees" },
    {
      label: employee?.firstName + " " + employee?.lastName,
      href: `/employees/${id}`,
    },
    { label: "Edit" },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8"
      aria-labelledby="edit-employee"
    >
      <div className="w-full max-w-4xl space-y-8 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
        <EmployeeEditHeaderInfo employee={employee} />
        <EmployeeEditPersonalInfo employee={employee} />
        <EmployeeEditCertificates
          employeeId={employee.id}
          certificates={employee.certificates ?? []}
        />
        <EmployeeEditSkills
          employeeId={employee.id}
          skills={employee.skills ?? []}
          employeeDepartment={employee.department || ""}
        />
      </div>
    </section>
  );
}
