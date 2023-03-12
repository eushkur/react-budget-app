import { StylesConfig } from "react-select";
import { ISelectOption } from "../../types";
import { Color } from "../../ui/colors";

export const CustomStyles: StylesConfig<ISelectOption> = {
  control: (styles) => ({
    ...styles,
    position: "relative",
    fontSize: "12px",
    color: Color.Black,
    borderRadius: "5px",
    border: `1px solid ${Color.Gray_light}`,
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
};
