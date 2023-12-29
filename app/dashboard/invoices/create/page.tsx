import Form from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomers } from '@/app/lib/data'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create invoice'
}

const Page = async () => {
  const costumers = await fetchCustomers()
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'invoices', href: '/dashboard/invoices'},
          {
            label: 'Create Invoice',
            href: 'dashboard/invoices/create',
            active: true
          }
        ]}    
      />
      <Form customers={costumers}/>
    </main>
  )
}
export default Page