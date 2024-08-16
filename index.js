const Box = (props) => {
  const { className, text } = props;
  const boxClassName = `box ${className}`;

  return <p className={boxClassName}>{text}</p>;
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small" text="Small" />
      <Box className="med" text="Medium" />
      <Box className="big" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
