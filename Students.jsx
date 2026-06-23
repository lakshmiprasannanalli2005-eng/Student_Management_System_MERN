import { Link } from 'react-router-dom';
const studentData = [
  { id: 1, name: 'Jahnavi', course: 'BCA' },
  { id: 2, name: 'Bhavani', course: 'BSc' },
  { id: 3, name: 'Rajesh', course: 'MCA' },
];
export default function Students() {
  return (
    <div style={{ padding:'20px' }}>
      <h2>Student List</h2>
      {studentData.map((s) => (
        <div key={s.id}>
          <Link to={`/students/${s.id}`}>
            {s.name} – {s.course}
          </Link>
        </div>
      ))}
    </div>
  );
}