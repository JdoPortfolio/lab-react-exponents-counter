

const ExponentTwo = (props) => {

  const {count} = props;
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result"> {count} * {count} = <span className="total">{count **2}</span></p>
  </div>
  );


};

export default ExponentTwo;