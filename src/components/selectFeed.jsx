import React from "react";
import "../css/feed.css";

const SelectFeed = (props) => {
  return (
    <div className="row w-100 m-0">
      <div className="col col-sm-0 col-md-3 p-0"></div>
      <div
        className="col col-sm-0 col-md-5 p-0"
        style={{ backgroundColor: props.theme.secondary }}
      >
        <div
          className="btn-group-toggle"
          id="selectFeedButtonGroup"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div
            type="button"
            className="btn active"
            style={{
              backgroundColor: props.theme.primary,
              borderRadius: 0,
              color: props.theme.text,
              flexGrow: 1,
            }}
            id="hot"
            onClick={props.onChange}
          >
            Hot
          </div>
          <div
            type="button"
            className="btn"
            style={{
              backgroundColor: props.theme.secondary,
              borderRadius: 0,
              color: props.theme.text,
              flexGrow: 1,
            }}
            id="new"
            onClick={props.onChange}
          >
            New
          </div>
          <div
            type="button"
            className="btn"
            style={{
              backgroundColor: props.theme.secondary,
              borderRadius: 0,
              color: props.theme.text,
              flexGrow: 1,
            }}
            id="best"
            onClick={props.onChange}
          >
            Best
          </div>
          <div
            type="button"
            className="btn"
            style={{
              backgroundColor: props.theme.secondary,
              borderRadius: 0,
              color: props.theme.text,
              flexGrow: 1,
            }}
            id="rising"
            onClick={props.onChange}
          >
            Rising
          </div>
          <div
            type="button"
            className="btn"
            style={{
              backgroundColor: props.theme.secondary,
              borderRadius: 0,
              color: props.theme.text,
              flexGrow: 1,
            }}
            id="top"
            onClick={props.onChange}
          >
            Top
          </div>
        </div>
      </div>
      <div className="col col-sm-0 col-md-4 p-0"></div>
    </div>
  );
};

export default SelectFeed;
