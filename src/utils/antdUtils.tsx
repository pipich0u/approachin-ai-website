import classNames from "classnames";

interface IIconFontProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}
export const IconFont = ({ type, className, style, onClick }: IIconFontProps) => (
  // <svg
  //   style={style}
  //   // @ts-expect-error
  //   onClick={onClick}
  //   class={classNames("icon", className)}
  //   aria-hidden="true"
  // >
  //   <use xlinkHref={"#" + type}></use>
  // </svg>
  <span
    className={classNames("iconfont", type, className)}
    style={style}
    onClick={onClick}
  ></span>
);