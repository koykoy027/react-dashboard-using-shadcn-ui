import { useQuery } from 'react-query';
import { fetchStudents } from './lib/apis/students';

function App() {
  const { data, isLoading, isError } = useQuery('students', fetchStudents);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }
  return (
    <div className="container border">
      <h1 className="uppercase font-bold">Fetch apis from laravel localhost</h1>
      <hr />

      <table className="w-full bg-white border border-gray-200 shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Gender</th>
          </tr>
        </thead>

        <tbody>
        {data.map((student) => (
          <tr key={student.id} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b">{student.id}</td>
            <td className="py-2 px-4 border-b">{student.name}</td>
            <td className="py-2 px-4 border-b">{student.email}</td>
            <td className="py-2 px-4 border-b">{student.gender}</td>
        </tr>
        ))}

          
        </tbody>
      </table>
    </div>
  );
}

export default App;
