export const Inputs = ({ type = "text", ...props }) => {
  return (
    <input type={type} className="border border-solid rounded-sm " {...props} />
  );
};
