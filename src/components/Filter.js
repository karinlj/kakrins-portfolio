import React, { useState, useEffect } from "react";
export const Filter = ({ displayItems, activeFilter }) => {
  //initializing state to 'big' components filter-state sent as prop
  const [filter, setFilter] = useState(activeFilter);

  const handleChange = (event) => {
    //  console.log("event.currentTarget", event.currentTarget);
    let updatedFilter = [...filter];
    //sets chosen input to checked/unchecked
    updatedFilter.map((item) => {
      if (item.id == event.target.id) {
        item.isChecked = event.target.checked;
      }
      return item;
    });
    //set state
    setFilter(updatedFilter);
  };

  useEffect(() => {
    // console.log("filter_filter_comp", filter);
  }, [filter]);

  useEffect(() => {
    //puts it here to handle at first render
    //which items are checked
    const checkedItems = filter.filter((item) => {
      return item.isChecked;
    });
    //names of checked items
    const checkedItemNames = checkedItems.map((item) => {
      return item.name;
    });
    //  console.log("checkedItemNames_filter_comp", checkedItemNames);
    //calling  prop-function sending checked names parameter up to parent comp
    displayItems(checkedItemNames);
  }, [filter]);

  return (
    <section className="technique_options">
      <h3>Techniques</h3>
      <div className="filter_options">
        {/* looping through filters from 'big' component */}
        {filter.map((item, index) => {
          return (
            <label className="option" htmlFor="react" key={index}>
              {item.name}
              <input
                type="checkbox"
                id={item.id}
                name={item.name}
                checked={item.isChecked}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
    </section>
  );
};
