import "./FormContainer.css";

const FormContainer = ({
  inputLabel,
  showDiv,
  divVisible,
  divVisible1,
  divVisible2,
  divVisible3,
}) => {
  return (
    <div className="form-group-custom-select2">
      <div className="form-control2">{inputLabel}</div>
      <div className="select2">
        <div className="div35">
          <div className="dropdown2">Please Select</div>
          <img className="vector-icon3" alt="" src="/vector.svg" />
        </div>
        {showDiv && (
          <div className="div36">
            <div className="list-entry10">List Entry # 1</div>
          </div>
        )}
        {divVisible && (
          <div className="div37">
            <div className="list-entry11">List Entry # 2</div>
          </div>
        )}
        {divVisible1 && (
          <div className="div38">
            <div className="list-entry10">List Entry # 3</div>
          </div>
        )}
        {divVisible2 && (
          <div className="div39">
            <div className="list-entry10">List Entry # 4</div>
          </div>
        )}
        {divVisible3 && (
          <div className="div40">
            <div className="list-entry10">List Entry # 5</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormContainer;
