// To pass children into a component, you can ue the children prop
// If you want to pass html styling or code into a component or more complex structures, use ReactNode class
// passing children into a component allows you to make components more flexible and reusable by enabling them to wrap or render dynamic content.

interface AlertProps {
  children: string;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-danger">{children}</div>;
};

export default Alert;
