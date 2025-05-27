export default function RadioGroup() {
  return (
    <div>
      <h2 style={{color:"green"}}>RadioGroup</h2>
      <fieldset>
        <legend>Gender:</legend>

        <div>
          <input type="radio" id="female" value="female" name="gender" checked />
          <label >Female</label>
        </div>
        <div>
          <input type="radio" id="male" value="male" name="gender" />
          <label >Male</label>
        </div>

        <div>
          <input type="radio" id="other" value="other"name="gender" />
          <label >Other</label>
        </div>
      </fieldset>
    </div>
  );
}
