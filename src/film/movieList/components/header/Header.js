import React, { useState } from "react";

export function Header() {
  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button type="submit">Search</button>
      </div>
    </>
  );
}

export default Header;
