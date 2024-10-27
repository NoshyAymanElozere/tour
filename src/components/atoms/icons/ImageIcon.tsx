import React from "react";

function ImageIcon() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_15426_6122)">
          <path d="M0 0H20V20H0V0Z" fill="#C6B962" fill-opacity="0.05" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 1H1V19H19V1ZM0 0V20H20V0H0Z"
            fill="#C6B962"
          />
          <path
            d="M3 14L7 8.5L10.5 11.5L11 11L9.5 9L11.5 6L17 14H3Z"
            fill="#C6B962"
          />
        </g>
        <defs>
          <clipPath id="clip0_15426_6122">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default ImageIcon;
