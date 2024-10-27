import React from "react";

function TxtIcon() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H20V20H0V0Z" fill="#BBBDC8" fill-opacity="0.05" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 1H1V19H19V1ZM0 0V20H20V0H0Z"
          fill="#BBBDC8"
        />
        <rect width="12" height="1" transform="translate(4 7)" fill="#9C9EA8" />
        <rect width="12" height="1" transform="translate(4 9)" fill="#9C9EA8" />
        <rect
          width="12"
          height="1"
          transform="translate(4 11)"
          fill="#9C9EA8"
        />
        <rect width="8" height="1" transform="translate(4 13)" fill="#9C9EA8" />
      </svg>
    </div>
  );
}

export default TxtIcon;
