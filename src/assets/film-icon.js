import Icon from "@ant-design/icons";

const FilmSvg = () => (
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
      d="M19.8 1H4.2C2.4 1 1 2.4 1 4.2V19.8C1 21.6 2.4 23 4.2 23H19.8C21.6 23 23 21.6 23 19.8V4.2C23 2.4 21.6 1 19.8 1ZM18 8H21V11H18V8ZM8 11H16V3H8V11ZM6 11H3V8H6V11ZM6 13H3V16H6V13ZM8 13H16V21H8V13ZM21 13H18V16H21V13ZM21 4.2V6H18V3H19.8C20.5 3 21 3.5 21 4.2ZM6 3H4.2C3.5 3 3 3.5 3 4.2V6H6V3ZM3 19.8V18H6V21H4.2C3.5 21 3 20.5 3 19.8ZM18 21H19.8C20.5 21 21 20.5 21 19.8V18H18V21Z"
      fill="black"
    />
    <mask
      id="mask0_514_10713"
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="22"
      height="22"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.8 1H4.2C2.4 1 1 2.4 1 4.2V19.8C1 21.6 2.4 23 4.2 23H19.8C21.6 23 23 21.6 23 19.8V4.2C23 2.4 21.6 1 19.8 1ZM18 8H21V11H18V8ZM8 11H16V3H8V11ZM6 11H3V8H6V11ZM6 13H3V16H6V13ZM8 13H16V21H8V13ZM21 13H18V16H21V13ZM21 4.2V6H18V3H19.8C20.5 3 21 3.5 21 4.2ZM6 3H4.2C3.5 3 3 3.5 3 4.2V6H6V3ZM3 19.8V18H6V21H4.2C3.5 21 3 20.5 3 19.8ZM18 21H19.8C20.5 21 21 20.5 21 19.8V18H18V21Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_514_10713)">
      <rect width="24" height="24" fill="currentColor" />
    </g>
  </svg>
);

export const FilmIcon = (props) => <Icon component={FilmSvg} {...props} />;
