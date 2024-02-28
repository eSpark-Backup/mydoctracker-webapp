import { AutoComplete } from "antd";
import debounce from "lodash.debounce";

const AutoCompleteInput = ({
  options,
  onSelect,
  handleSearch,
  placeholder,
}) => {

  const debouncedSearch = debounce((e) => {
    handleSearch(e)
  }, 500);

  return (
    <AutoComplete
      onSearch={debouncedSearch}
      placeholder={placeholder}
      options={options}
      onSelect={onSelect}
    />
  );
};
export default AutoCompleteInput;
