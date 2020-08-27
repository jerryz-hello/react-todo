import React from "react";
import FilterLink from "../containers/FilterLink";
import { VISIBILITY_FILTERS } from "../actions";

const Footer = () => (
  <p>
    Show: <FilterLink filter={VISIBILITY_FILTERS.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={VISIBILITY_FILTERS.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    {", "}
    <FilterLink filter={VISIBILITY_FILTERS.SHOW_ACTIVE}>Active</FilterLink>
  </p>
);

export default Footer;
