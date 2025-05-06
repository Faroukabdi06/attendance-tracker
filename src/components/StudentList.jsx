import Student from "./Student";
function StudentList({ students, onToggle }) {
  console.log(students)
  return (
    <div>
      {/* TODO 4: Map through students and render Student components */}
      <ul>
        {students.map((student)=>(
          // console.log(student)
          <Student
          student = {student}
          key={student.id}
          onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
