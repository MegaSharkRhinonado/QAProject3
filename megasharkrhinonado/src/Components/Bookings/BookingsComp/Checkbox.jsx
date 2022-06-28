export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
      <input
        type="checkbox"
        id={`${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
  )
}