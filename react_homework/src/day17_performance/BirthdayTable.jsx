import { useState,useMemo } from "react";

const BirthdayTable = () => {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sortBy, setSortBy] = useState(""); 

  const handleAdd = () => {
    if (name && birthday) {
      setRecords([...records, { name, birthday }]);
      setName("");
      setBirthday("");
    }
  };
//useMemo prevents unnecessary sorting if record or sortby hasn't changed
 const sortedRecords = useMemo(() => {
    const sorted = [...records];
    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "age") {
      sorted.sort((a, b) => new Date(a.birthday) - new Date(b.birthday)); 
    }
    return sorted;
  }, [records, sortBy]);

  return (
    <div>
      <h2>Birthday Record Table</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <button onClick={handleAdd}>Add Record</button>

      <div>
        <label>Sort by</label>
        <br/>
        <label>
          name
          <input
            type="radio"
            checked={sortBy === "name"}
            value="name"
            onChange={() => setSortBy("name")}
          />
        </label>
        <label>
          age
          <input
            type="radio"
            checked={sortBy === "age"}
            value="age"
            onChange={() => setSortBy("age")}
          />
        </label>

      </div>

      <table style={{ marginTop: "1rem", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {sortedRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayTable;
