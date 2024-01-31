import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Resut({ input }) {
  let Resultdata = calculateInvestmentResults(input);
  const initialinvesment =
    Resultdata[0].valueEndOfYear -
    Resultdata[0].interest -
    Resultdata[0].annualInvestment;
  console.log(Resultdata);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {Resultdata.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * initialinvesment;
          const totalAmount = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
