export default function Checkbox() {
  return (
    <div>
      <h2 style={{ color: "green" }}>Checkbox</h2>
      <fieldset>
        <legend>Interests:</legend>
        <div>
          <input type="checkbox" />
          <label>Coding</label>
        </div>

        <div>
          <input type="checkbox" name="" id="" />
          <label>Music</label>
        </div>

        <div>
          <input type="checkbox" />
          <label >Hiking</label>
        </div>
      </fieldset>
    </div>
  );
}
