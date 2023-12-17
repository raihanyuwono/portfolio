import { Props } from "@/interfaces/IProps";
import "./style.css";

function Menus({ children, classes }: Props) {
  return <div className={`menus ${classes ? classes : ""}`}>{children}</div>;
}

export default Menus;
