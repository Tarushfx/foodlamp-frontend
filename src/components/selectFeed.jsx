import React from "react";
import getFeed from "../services/feedService";

const SelectFeed = (props) => {
  return (
    <div className="row w-100 m-0">
      <div className="col col-sm-0 col-md-3 p-0"></div>
      <div className="col col-sm-0 col-md-5 p-0 bg-dark">
        <div className="btn-group-toggle" id="selectFeedButtonGroup">
          <div
            type="button"
            className="btn btn-dark active"
            id="hot"
            onClick={props.onChange}
          >
            Hot
          </div>
          <div
            type="button"
            className="btn btn-dark "
            id="new"
            onClick={props.onChange}
          >
            New
          </div>
          <div
            type="button"
            className="btn btn-dark"
            id="best"
            onClick={props.onChange}
          >
            Best
          </div>
          <div
            type="button"
            className="btn btn-dark "
            id="rising"
            onClick={props.onChange}
          >
            Rising
          </div>
          <div
            type="button"
            className="btn btn-dark "
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
