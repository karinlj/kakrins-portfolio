import React, { useState, useEffect } from "react";

export const Filter = ({ displayItems, activeFilter }) => {
  //initializing state to 'big' components filter-state sent as prop
  const [techFilter, setTechFilter] = useState(activeFilter);

  const handleChange = (event) => {
    //  console.log("event.currentTarget", event.currentTarget);
    let updatedFilter = [...techFilter];
    //sets chosen input to checked/unchecked
    updatedFilter.map((item) => {
      if ("" + item.id === event.target.id) {
        item.isChecked = event.target.checked;
      }
      return item;
    });
    setTechFilter(updatedFilter);
  };

  useEffect(() => {
    //console.log("filter_filter_comp", techFilter);
  }, [techFilter]);

  useEffect(() => {
    //handle at first render which items are checked
    const checkedItems = techFilter.filter((item) => {
      return item.isChecked;
    });
    //names of checked items
    const checkedItemNames = checkedItems.map((item) => {
      return item.name;
    });
    //  console.log("checkedItemNames_filter_comp", checkedItemNames);
    //calling  prop-function sending checked names parameter up to parent comp
    displayItems(checkedItemNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [techFilter]);

  return (
    <section className="technique_options">
      <h2>Techniques</h2>
      <div className="filter_options">
        {techFilter.map((item, index) => {
          return (
            <label className="option" htmlFor={item.id} key={index}>
              {item.name}
              <input
                type="checkbox"
                id={item.id}
                className="sr_only"
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
