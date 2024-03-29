interface SelectProps {
  name?: string
  id: string
  options: { value: string, label: string }[]
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  hook?: object
}

const Select: React.FC<SelectProps> = props => {
  return(
    <select
      className='rounded-lg outline-none p-1 bg-white border-2 border-gray-500'
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      {...props.hook}
    >
      {props.options.map(option => (
        <option
          value={option.value}
          key={option.label}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select