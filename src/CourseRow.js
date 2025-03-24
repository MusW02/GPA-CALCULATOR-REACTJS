import React from "react";

const CourseRow = ({ index, course, handleCourseChange, handleRemoveCourse }) => {
  return (
    <div className="course-row">
      <input
        type="text"
        placeholder="Course Name"
        value={course.courseName}
        onChange={(e) => handleCourseChange(index, "courseName", e.target.value)}
        required
        pattern="[A-Za-z ]+"
        title="Only alphabetic characters allowed"
      />
      <input
        type="number"
        placeholder="Credit Hours"
        value={course.creditHours}
        onChange={(e) => handleCourseChange(index, "creditHours", e.target.value)}
        required
        min="1"
        max="3"
      />
      <select
        value={course.grade}
        onChange={(e) => handleCourseChange(index, "grade", e.target.value)}
        required
      >
        <option value="" disabled>Select Grade</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <button onClick={() => handleRemoveCourse(index)}>-</button>
    </div>
  );
};

export default CourseRow;
