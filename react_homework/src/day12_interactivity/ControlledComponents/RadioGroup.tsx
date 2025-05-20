export default function RadioGroup() {
  return (
    <div>
      <h2>RadioGroup</h2>
      <fieldset>
        <legend>Gender:</legend>

        <div>
          <input type="radio" id="female" value="female" name="gender" checked />
          <label for="female">Female</label>
        </div>
        <div>
          <input type="radio" id="male" value="male" name="gender" />
          <label for="male">Male</label>
        </div>

        <div>
          <input type="radio" id="other" value="other"name="gender" />
          <label for="other">Other</label>
        </div>
      </fieldset>
    </div>
  );
}
