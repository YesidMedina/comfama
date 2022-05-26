import { Select, MenuItem } from "@mui/material";
import useContinent from "../hooks/useContinent";

const CATEGORYS = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const Grouped = () => {
  const { category, handleChangeCategory } = useContinent();
  return (
    <>
      <Select fullWidth onChange={handleChangeCategory} value={category}>
        {CATEGORYS.map((category) => (
          <MenuItem key={category.value} value={category.value}>
            {category.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Grouped;
