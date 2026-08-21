"use client";

import { useSiteContent } from "@/lib/siteContent";
import { openRoles as defaultOpenRoles } from "@/lib/content/careers";
import { useEditableContent } from "@/lib/editableContent";

export default function OpenRolesTable() {
  const { company } = useSiteContent();
  const roles = useEditableContent("careers-roles", defaultOpenRoles);

  return (
    <div className="table-responsive">
      <table className="table align-middle bg-white" style={{ borderRadius: "var(--radius-card)", overflow: "hidden" }}>
        <thead>
          <tr>
            <th>Role</th>
            <th>Department</th>
            <th>Location</th>
            <th>Type</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.title}>
              <td className="fw-semibold">{role.title}</td>
              <td className="text-light-custom">{role.department}</td>
              <td className="text-light-custom">{role.location}</td>
              <td className="text-light-custom">{role.type}</td>
              <td>
                <a href={`mailto:${company.email}?subject=Application: ${role.title}`} className="btn-secondary-custom btn-sm-custom">
                  Apply
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
