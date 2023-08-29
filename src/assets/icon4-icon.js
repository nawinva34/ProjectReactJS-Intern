import Icon from "@ant-design/icons";

const Icon4Svg = () => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9375 11.3273L8 13.5421L4.0625 11.3273V8.98722L2.9375 8.36221V11.9852L8 14.8329L13.0625 11.9852V8.36221L11.9375 8.98722V11.3273Z"
      fill="currentColor"
    />
    <path
      d="M8 0.616394L0.125 4.69972V5.67475L8 10.0496L14.75 6.29975V9.40627H15.875V4.69972L8 0.616394ZM13.625 5.6378L12.5 6.26277L8 8.76291L3.5 6.26277L2.375 5.6378L1.59527 5.2046L8 1.88364L14.4047 5.2046L13.625 5.6378Z"
      fill="currentColor"
    />
  </svg>
);

export const Icon4Icon = (props) => <Icon component={Icon4Svg} {...props} />;
