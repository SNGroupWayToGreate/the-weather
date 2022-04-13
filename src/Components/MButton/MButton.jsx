import React from "react";
import "./MButton.css";

const MButton = ({
  BType,
  BStyle,
  BClass,
  BSize,
  BIcon,
  BLoading,
  disabled,
  iconPos,
  children,
  ...props
}) => {
  const getType = (type) => {
    switch (type) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      case "disabled":
        return "disabled";
      case "success":
        return "success";
      case "danger":
        return "danger";
      case "warning":
        return "warning";
      case "info":
        return "info";
      case "light":
        return "light";
      case "dark":
        return "dark";
      case "loading":
        return "loading";
      case "link":
        return "link";
      case "outline-primary":
        return "outline-primary";
      default:
        return "primary";
    }
  };

  const getSize = (size) => {
    switch (size) {
      case "small":
        return "small";
      case "large":
        return "large";
      case 'submit':
        return 'submit';
      default:
        return "medium";
    }
  };

  const getIconPosition = (position) => {
    switch (position) {
      case "left":
        return { flexDirection: "row" };
      case "right":
        return { flexDirection: "row-reverse" };
      default:
        return { flexDirection: "row" };
    }
  };

  return (
    <button
      className={`btn ${getType(BType)} ${getSize(BSize)} ${BClass}`}
      style={{
        ...getIconPosition(iconPos),
        ...BStyle,
      }}
      disabled={disabled || BType === "disabled" || BLoading}
      {...props}
    >
      {BIcon && BIcon}
      {BLoading ? (
        <div role="status">
          <span className="loading__dot"></span>
          <span className="loading__dot dot2"></span>
          <span className="loading__dot dot3"></span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default MButton;
