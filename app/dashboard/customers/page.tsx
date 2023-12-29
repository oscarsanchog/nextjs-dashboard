import { Metadata } from 'next';
import Table from '@/app/ui/customers/table'
import { fetchAllCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';


export const metadata: Metadata = {
  title: 'Customers'
}

const page = async () => {
  const customers = await fetchAllCustomers()
  
  return (
    <Suspense fallback={<TableRowSkeleton/>}>
      <Table customers={customers} />
    </Suspense>
  )
}
export default page