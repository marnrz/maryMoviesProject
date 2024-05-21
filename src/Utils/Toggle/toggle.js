export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggleContainer">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Light Mode</label>
    </div>
  );
};
export default Toggle;
// checkedChildren={
//     <Space>
//       {" "}
//       <MoonOutlined />
//     </Space>
//   }
//   unCheckedChildren={
//     <Space>
//       <SunOutlined />
//     </Space>
//   }
