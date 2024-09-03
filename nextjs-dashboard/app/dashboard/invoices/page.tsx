import { getAllCustomers } from "@/app/api/customers/route";
import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/invoices/create-form";

export default function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { id: 1, label: "Dashboard", href: "/dashboard" },
          {
            id: 2,
            label: "Invoices",
            href: "/dashboard/invoices",
            active: true,
          },
        ]}
      />
    </div>
  );
}
