import { getAllUsers } from "../lib/actions";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Phone</th>
            <th style={tableHeaderStyle}>Location</th>
            <th style={tableHeaderStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.phone}</td>
              <td style={tableCellStyle}>{user.location}</td>
              <td style={tableCellStyle}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const tableHeaderStyle = {
  padding: '12px 15px',
  textAlign: 'left',
  color: '#555',
  fontWeight: 'bold',
  borderBottom: '2px solid #ddd'
};

const tableCellStyle = {
  padding: '10px 15px',
  textAlign: 'left',
  color: '#666'
};