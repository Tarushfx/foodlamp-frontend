import React from "react";

const ProfileDropdown = (props) => {
  return (
    <div
      className="btn-group-toggle"
      id="selectFeedButtonGroup"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <a
        href="/me"
        className="nav-link"
        style={{
          backgroundColor: props.theme.secondary,
          borderRadius: 2,
          justifyContent: "center",
          display: "grid",
          flexGrow: 1,
        }}
      >
        <button type="button" class="btn" style={{ color: props.theme.text }}>
          Profile
        </button>
      </a>
      <a
        href="/me/likes"
        className="nav-link"
        style={{
          backgroundColor: props.theme.secondary,
          borderRadius: 2,
          justifyContent: "center",
          display: "grid",
          flexGrow: 1,
        }}
      >
        <button type="button" class="btn" style={{ color: props.theme.text }}>
          Favourites
        </button>
      </a>
      <a
        href="/me/graphs"
        style={{
          backgroundColor: props.theme.secondary,
          borderRadius: 2,
          justifyContent: "center",
          display: "grid",
          flexGrow: 1,
        }}
      >
        <button type="button" style={{ color: props.theme.text }} class="btn">
          Graphs
        </button>
      </a>
    </div>
  );
};

export default ProfileDropdown;
