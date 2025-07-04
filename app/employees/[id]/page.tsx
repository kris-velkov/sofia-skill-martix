import { notFound } from "next/navigation";
import { getEmployeeById } from "@/lib/db";
import {} from "@/components/employees/card/employee-skill-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import EmployeePersonalInfo from "@/components/employees/profile/employee-personal-info";
import EmployeeSkillsInfo from "@/components/employees/profile/employee-skills-info";
import EmployeeCertificatesInfo from "@/components/employees/profile/employee-certificates-info";
import EmployeeHeaderInfo from "@/components/employees/profile/employee-header-info";

export default async function EmployeeProfilePage({
  params,
}: {
  params: { id: string };
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
      label: `${employee.firstName} ${employee.lastName}`,
      href: `/employees/${employee.id}`,
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-8 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
        <EmployeeHeaderInfo
          employee={{
            firstName: employee.firstName,
            lastName: employee.lastName,
            department: employee.department,
            email: employee.email,
            city: employee.city,
            bio: employee.bio,
            country: employee.country,
            badge: employee.badge,
            slackProfileImage: employee.slackProfileImage,
            linkedinUrl: employee.linkedinUrl,
            slackUrl: employee.slackUrl,
          }}
        />
        <EmployeePersonalInfo
          employee={{
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            phone: employee.phone,
            department: employee.department,
            city: employee.city,
            bio: employee.bio,
            country: employee.country,
            careerExperience: employee.careerExperience,
          }}
        />
        <EmployeeCertificatesInfo certificates={employee.certificates} />
        <EmployeeSkillsInfo skills={employee.skills} />
      </div>
    </section>
  );
}
