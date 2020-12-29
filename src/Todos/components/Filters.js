import { Filter, Flex, ClearAll } from "../style";

export default function Filters({ handleClear, handleFilter }) {
  const handleFilters = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <div>
      <Flex>
        <Filter onClick={handleFilters} type="button" value="all" />
        <Filter onClick={handleFilters} type="button" value="completed" />
        <Filter onClick={handleFilters} type="button" value="undone" />
        <ClearAll onClick={handleClear}>Clear All</ClearAll>
      </Flex>
    </div>
  );
}
