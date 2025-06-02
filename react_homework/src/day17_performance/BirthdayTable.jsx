import { useState } from "react"

const BirthdayTable = () => {
    const [records, setRecords] = useState([]);
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleAdd = () => {
        if(name&&birthday){
            setRecords([...records,{name,birthday}]);
            setName("")
            setBirthday("")
        }
    }


    return <div>
        <h2>Birthday Record Table</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <button onClick={handleAdd}>Add Record</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birthday</th>
                </tr>
            </thead>

            <tbody>
                {records.map((record, index) => {
                    return  <tr key={index}>
                        <td>{record.name}</td>
                        <td>{record.birthday}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default BirthdayTable;