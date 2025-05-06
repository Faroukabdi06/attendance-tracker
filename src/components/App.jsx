import StudentList from './StudentList';
import { useState } from 'react';

// TODO 1: Add a resetAttendance function to mark all students as absent

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ];
const [students, setStudents] = useState(initialStudents)
// Todoo 1
const resetAttendance = ()=>{
  const updated = students.map(student=>({
    ...student, present:false
})

  )
  setStudents(updated)
}
  // TODO 2: Create a toggleAttendance function and pass it to StudentList
  const toggleAttendance  = (id) => {
    const updated  = students.map(student=>
      student.id === id ?
      {...student, present : !student.present} : student
    )
    setStudents(updated)
   }
   const count = students.filter(student=>student.present).length
  return (
    <div className='container'>
      <h1>🏫 Attendance Tracker</h1>
      <p>Present:{count} </p>

      {/* TODO 3: Add a Reset Attendance button here */}
      <button onClick={resetAttendance}>Reset</button>
      <StudentList
      students={students}
      onToggle={toggleAttendance}
      />
    </div>
  );
}

export default App;
