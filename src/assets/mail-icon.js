import Icon from "@ant-design/icons";

const MailSvg = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2.7551C20 2.0244 19.7144 1.32363 19.206 0.806951C18.6976 0.290269 18.0081 0 17.2892 0H2.71084C1.99188 0 1.30237 0.290269 0.793987 0.806951C0.285606 1.32363 0 2.0244 0 2.7551V12.2449C0 12.9756 0.285606 13.6764 0.793987 14.193C1.30237 14.7097 1.99188 15 2.71084 15H17.2892C18.0081 15 18.6976 14.7097 19.206 14.193C19.7144 13.6764 20 12.9756 20 12.2449V2.7551ZM2.74096 1.22449H17.2892L17.7711 1.31633L9.75904 8.08163L2.22892 1.28571L2.74096 1.22449ZM18.7952 12.2449C18.7952 12.6508 18.6365 13.0402 18.3541 13.3272C18.0716 13.6143 17.6886 13.7755 17.2892 13.7755H2.71084C2.31142 13.7755 1.92836 13.6143 1.64592 13.3272C1.36349 13.0402 1.20482 12.6508 1.20482 12.2449V2.7551C1.20316 2.54477 1.24418 2.33636 1.3253 2.14286L9.33735 9.36735C9.44646 9.4622 9.58533 9.51433 9.72892 9.51433C9.8725 9.51433 10.0114 9.4622 10.1205 9.36735L18.6446 2.14286C18.7257 2.33636 18.7667 2.54477 18.7651 2.7551L18.7952 12.2449Z"
      fill="currentColor"
    />
  </svg>
);

export const MailIcon = (props) => <Icon component={MailSvg} {...props} />;