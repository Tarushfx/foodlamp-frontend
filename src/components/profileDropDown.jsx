import React from "react";
import "../css/profileDown.css";
import Likes from "../modals/likes";
const ProfileDropdown = (props) => {
  return (
    <>
      <figure className="snip1336">
        <img src={process.env.PUBLIC_URL + "/road.jpg"} alt="x" />
        <figcaption>
          <img src={process.env.PUBLIC_URL + "/user.png"} class="profile" />
          <h2>
            {props.data && props.data.name}
            <span>{props.data && props.data.email}</span>
          </h2>
          <a href="/graphs" class="follow">
            Graphs
          </a>
          <a
            class="info"
            type="button"
            data-toggle="modal"
            data-target="#likesModal"
            id="likeListButton"
          >
            Favourites
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default ProfileDropdown;
