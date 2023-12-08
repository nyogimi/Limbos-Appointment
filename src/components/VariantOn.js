import { useMemo } from "react";
import "./VariantOn.css";

const VariantOn = ({
  prop,
  variantOnWidth,
  variantOnPosition,
  variantOnTop,
  variantOnLeft,
  variantOnOpacity,
  divHeight,
  divWidth,
  divColor,
}) => {
  const variantOnStyle = useMemo(() => {
    return {
      width: variantOnWidth,
      position: variantOnPosition,
      top: variantOnTop,
      left: variantOnLeft,
      opacity: variantOnOpacity,
    };
  }, [
    variantOnWidth,
    variantOnPosition,
    variantOnTop,
    variantOnLeft,
    variantOnOpacity,
  ]);

  const divStyle = useMemo(() => {
    return {
      height: divHeight,
      width: divWidth,
      color: divColor,
    };
  }, [divHeight, divWidth, divColor]);

  return (
    <div className="varianton" style={variantOnStyle}>
      <div className="div" style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default VariantOn;
