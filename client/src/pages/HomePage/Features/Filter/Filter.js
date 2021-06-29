import { ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import {
  FilterSection,
  FilterTitle,
  Sort,
  SortContainer,
  SortBy,
} from "./styles";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <FilterSection>
      <FilterTitle>Popular Movies</FilterTitle>

      <Sort>
        <SortContainer>
          Sort{" "}
          <ArrowDropDown
            style={{ cursor: "pointer" }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </SortContainer>
        {open && (
          <SortBy>
            Sorts By
            <div className="inputControl">
              <select>
                <option
                  onChange={(e) => setValue(e.target.value)}
                  value="popularity.desc"
                >
                  Popularity Descending
                </option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="popularity.asc">Rating Descending</option>
                <option value="popularity.asc">Rating Ascending</option>
              </select>
            </div>
          </SortBy>
        )}
      </Sort>
    </FilterSection>
  );
};

export default Filter;
