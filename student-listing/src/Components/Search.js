import React, { useState } from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"
import { STUDENTS } from "../studentsList";

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search(props) {
  const initialData = {
    studentName: "",
    joiningDate: "",
  };

  const [data, setData] = useState(initialData);

  const handleChange = (key, value) => setData({ ...data, [key]: value });

  const addStudent = () => {
    const matchingStudent = STUDENTS.find(
      (student) => student.name.toLowerCase() === data.studentName.toLowerCase()
    );

    if (!matchingStudent) {
      props.onError(`Sorry, ${data.studentName} is not a verified student!`);
    } else if (!checkValidity(data.joiningDate, matchingStudent.validityDate)) {
      props.onError(`Sorry, ${data.studentName}'s validity has Expired!`);
    } else {
      props.onAdd(matchingStudent.name);
    }

    setData(initialData);
  };

  const emptyFields = () => Object.values(data).some((value) => value === "");

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            value={data["studentName"]}
            onChange={(event) =>
              handleChange("studentName", event.target.value)
            }
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            value={data.joiningDate}
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            onChange={(event) =>
              handleChange("joiningDate", event.target.value)
            }
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={() => addStudent()}
        disabled={emptyFields()}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
