import React from 'react';
import '../css/students.css';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, editStudent, deleteStudent } from '../features/studentSlice';
import StudentForm from './StudentForm';

function Student() {
  const students = useSelector((state) => state.students.students);
  const isFormOpen = useSelector((state) => state.students.isFormOpen);
  const dispatch = useDispatch();

  return (
    <div className='student-container'>
      {isFormOpen ? (
        <StudentForm />
      ) : (
        <>
          <div className='btn-container-heading'>
            <h1> Student Details</h1>
            <h3>Rai University</h3>
            <button className='add-btn' onClick={() => dispatch(addStudent())}>
              Add New Student
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.batch}</td>
                  <td>  <button onClick={() => dispatch(editStudent(student))}>Edit</button>
                  <button onClick={()=>dispatch(deleteStudent(student.id))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Student;
