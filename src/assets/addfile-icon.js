import Icon from "@ant-design/icons";

const AddFileSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.8 7.45C20.825 7.5 20.85 7.55 20.9 7.6C21 7.7 21 7.9 21 8V20C21 21.7 19.7 23 18 23H6C4.3 23 3 21.7 3 20V4C3 2.3 4.3 1 6 1H14C14.1 1 14.3 1 14.4 1.1C14.5 1.1 14.6 1.2 14.7 1.3L20.7 7.3C20.75 7.35 20.775 7.4 20.8 7.45ZM17.6 7L15 4.4V7H17.6ZM18 21H6C5.4 21 5 20.6 5 20V4C5 3.4 5.4 3 6 3H13V8C13 8.6 13.4 9 14 9H19V20C19 20.6 18.6 21 18 21ZM15 16C15.6 16 16 15.6 16 15C16 14.4 15.6 14 15 14H13V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V14H9C8.4 14 8 14.4 8 15C8 15.6 8.4 16 9 16H11V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18V16H15Z"
      fill="black"
    />
    <mask
      id="mask0_514_10700"
      maskUnits="userSpaceOnUse"
      x="3"
      y="1"
      width="18"
      height="22"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.8 7.45C20.825 7.5 20.85 7.55 20.9 7.6C21 7.7 21 7.9 21 8V20C21 21.7 19.7 23 18 23H6C4.3 23 3 21.7 3 20V4C3 2.3 4.3 1 6 1H14C14.1 1 14.3 1 14.4 1.1C14.5 1.1 14.6 1.2 14.7 1.3L20.7 7.3C20.75 7.35 20.775 7.4 20.8 7.45ZM17.6 7L15 4.4V7H17.6ZM18 21H6C5.4 21 5 20.6 5 20V4C5 3.4 5.4 3 6 3H13V8C13 8.6 13.4 9 14 9H19V20C19 20.6 18.6 21 18 21ZM15 16C15.6 16 16 15.6 16 15C16 14.4 15.6 14 15 14H13V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V14H9C8.4 14 8 14.4 8 15C8 15.6 8.4 16 9 16H11V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18V16H15Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_514_10700)">
      <rect width="24" height="24" fill="currentColor" />
    </g>
  </svg>
);

export const AddFileIcon = (props) => (
  <Icon component={AddFileSvg} {...props} />
);