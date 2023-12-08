import { useMemo } from "react";
import "./Property1DayIndonesian.css";

const Property1DayIndonesian = ({
  sen,
  property1DayIndonesianWidth,
  property1DayIndonesianPosition,
  property1DayIndonesianTop,
  property1DayIndonesianLeft,
  property1DayIndonesianHeight,
  senFontWeight,
  senFontFamily,
  senColor,
}) => {
  const property1DayIndonesianStyle = useMemo(() => {
    return {
      width: property1DayIndonesianWidth,
      position: property1DayIndonesianPosition,
      top: property1DayIndonesianTop,
      left: property1DayIndonesianLeft,
      height: property1DayIndonesianHeight,
    };
  }, [
    property1DayIndonesianWidth,
    property1DayIndonesianPosition,
    property1DayIndonesianTop,
    property1DayIndonesianLeft,
    property1DayIndonesianHeight,
  ]);

  const senStyle = useMemo(() => {
    return {
      fontWeight: senFontWeight,
      fontFamily: senFontFamily,
      color: senColor,
    };
  }, [senFontWeight, senFontFamily, senColor]);

  return (
    <div
      className="property-1day-indonesian"
      style={property1DayIndonesianStyle}
    >
      <div className="sen" style={senStyle}>
        {sen}
      </div>
    </div>
  );
};

export default Property1DayIndonesian;
