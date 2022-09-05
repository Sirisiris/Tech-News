import React from "react";
import logo from "../media/tn-logo.png";
import search from "../media/icons-search.png";

export default function NavBar({searcher}) {
  return (
    <nav
      style={{
        background: "#c9e265",
        height: "6rem",
        width: "100%",
        position: "fixed",
        zIndex: "1",
        paddingTop: "1.3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="" />

      <div
        style={{
          height: "2rem",
          width: "30%",
          marginRight: "1rem",
          padding: "0.5rem",
          borderRadius: "25px",
          border: "0",
          background: "rgb(248, 252, 238)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={search} alt="" width="25rem" />
        <input
                    type="text"
                    placeholder="Search..."
                    className="search"
                    onChange={searcher}
          style={{
            border: "none",
            background: "none",
            outline: "none",
            marginLeft: "1rem",
            width: "100%",
          }}
        ></input>
      </div>
    </nav>
  );
}
