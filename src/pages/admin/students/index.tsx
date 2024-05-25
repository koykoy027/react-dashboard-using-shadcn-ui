import { useQuery } from 'react-query';
import { fetchStudents } from '@/lib/apis/students';
import { columns } from '@/lib/columns/students';
import { DataTable } from "@/components/data-table"

const Index: React.FC = () => {
    
    const { data, isLoading, isError } = useQuery('students', fetchStudents);

    if (isLoading) {
        return <><h1>Loading...</h1></>;
    }

    if (isError) {
        return <p>Something went wrong {isError}</p>;
    }


    return (
        <div className="container p-10 border ">      
          <h1 className="mt-10 font-bold uppercase">using Shadcn/ui Datatables</h1>
          <DataTable columns={columns} data={data} />
          
        </div>
      );
}

export default Index;