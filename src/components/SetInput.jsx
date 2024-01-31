export default function UserInput({ onChange, UserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={UserInput.initialinvesment}
            onChange={(event) => {
              onChange(" initialinvesment", event.target.value);
            }}
            required
          />
        </p>
        <p>
          <label> Anual Invenstment</label>
          <input
            type="number"
            value={UserInput.annualinvestment}
            onChange={(event) => {
              onChange(" Annualinvestment", event.target.value);
            }}
            required
          />{" "}
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={UserInput.expectedReturn}
            onChange={(event) => {
              onChange(" ExpectedReturn", event.target.value);
            }}
            required
          />{" "}
        </p>
        <p>
          <label> Duration </label>
          <input
            type="number"
            value={UserInput.Duration}
            onChange={(event) => {
              onChange(" Duration", event.target.value);
            }}
            required
          />{" "}
        </p>
      </div>
    </section>
  );
}
