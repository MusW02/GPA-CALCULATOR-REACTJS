import React, { useState } from "react";
import CourseRow from "./CourseRow";
import "./App.css";

const App = () => {
  const [courses, setCourses] = useState([{ courseName: "", creditHours: "", grade: "" }]);
  const maxCourses = 10;

  const handleAddCourse = () => {
    if (courses.length < maxCourses) {
      setCourses([...courses, { courseName: "", creditHours: "", grade: "" }]);
    }
  };

  const handleRemoveCourse = (index) => {
    if (courses.length > 1) {
      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses);
    }
  };

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const calculateGPA = () => {
    let totalCreditHours = 0;
    let totalGradePoints = 0;

    courses.forEach((course) => {
      const { creditHours, grade } = course;
      const gradePoints = getGradePoints(grade);

      if (creditHours && gradePoints !== null) {
        totalCreditHours += parseFloat(creditHours);
        totalGradePoints += gradePoints * parseFloat(creditHours);
      }
    });

    return totalCreditHours === 0 ? 0 : (totalGradePoints / totalCreditHours).toFixed(2);
  };

  const getGradePoints = (grade) => {
    const gradeMapping = {
      A: 4.0,
      B: 3.0,
      C: 2.0,
      D: 1.0,
      F: 0.0,
    };
    return gradeMapping[grade] ?? null;
  };

  return (
    <div className="App">
      <h1>GPA Calculator</h1>
      {courses.map((course, index) => (
        <CourseRow
          key={index}
          index={index}
          course={course}
          handleCourseChange={handleCourseChange}
          handleRemoveCourse={handleRemoveCourse}
        />
      ))}
      <button onClick={handleAddCourse} disabled={courses.length >= maxCourses}>
        + Add Course
      </button>
      <h2>GPA: {calculateGPA()}</h2>
    </div>
  );
};

export default App;
