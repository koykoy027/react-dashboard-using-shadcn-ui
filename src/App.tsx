import { useState, useEffect } from "react";
import { fetchStudents } from "./lib/apis/students";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsData = await fetchStudents();
        setStudents(studentsData);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    fetchData();
  }, []);

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
          {students.map((data) => (
            <tr key={data.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{data.id}</td>
              <td className="py-2 px-4 border-b">{data.name}</td>
              <td className="py-2 px-4 border-b">{data.email}</td>
              <td className="py-2 px-4 border-b">{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
