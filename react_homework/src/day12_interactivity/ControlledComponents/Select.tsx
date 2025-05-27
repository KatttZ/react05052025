export default function Select() {
  return (
    <div>
    <h2 style={{color:"green"}}>Select & Option</h2>

    <fieldset>
      <legend>Age:</legend>
      <select>
          <option value="">-- Select Age --</option>
          <option value="Secret">Secret</option>
          <option value="10">Ten</option>
          <option value="20">Twenty</option>
          <option value="30">Thirty</option>
      </select>
    
    </fieldset>
    </div>
  );
}



