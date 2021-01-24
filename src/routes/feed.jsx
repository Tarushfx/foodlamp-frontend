import React, { Component } from "react";
import FeedPost from "../higherOrderComponents/feedPost";
import NavBar from "./../components/navbar";
import "../css/body.css";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { getFeed } from "../services/feedService";
import SelectFeed from "../components/selectFeed";
import http from "../services/httpService";
import { getEmail, getToken } from "../services/authService";

class Feed extends Component {
  state = {
    darkTheme: true,
    posts: [],
  };

  onChange = async (e) => {
    let posts = [];
    this.setState({ posts });
    document
      .getElementById("selectFeedButtonGroup")
      .childNodes.forEach((item) => item.classList.remove("active"));
    // console.log(document.getElementById("selectFeedButtonGroup").childNodes);
    document.getElementById(e.target.id).classList.add("active");

    const feedArray = await getFeed(e.target.id);
    posts = this.getPosts(feedArray);
    this.setState({ posts });
  };

  getPosts = (feedArray) => {
    return Object.keys(feedArray).map(function (key) {
      return {
        imageUrl: feedArray[key].data.url,
        postTitle: feedArray[key].data.title,
        postUpvotes: feedArray[key].data.ups,
        postLink: feedArray[key].data.permalink,
        postCreateTime: new Date(parseInt(feedArray[key].data.created * 1000)),
        author: feedArray[key].data.author,
      };
    });
  };

  async componentDidMount() {
    const feedArray = await getFeed("hot");
    const posts = this.getPosts(feedArray);
    this.setState({ posts });
  }

  applyTheme = () => {
    if (this.state.darkTheme) document.body.style.backgroundColor = "#696969";
    else document.body.style.backgroundColor = "#fff";
  };

  changeTheme = () => this.setState({ darkTheme: !this.state.darkTheme });

  handleLike = async (e, link) => {
    try {
      console.log(e, link);
      const apiEndpoint = "http://localhost:4000";
      const req = await http.post(`${apiEndpoint}/like`, {
        email: await getEmail(),
        link: `www.reddit.com${link}`,
      });
      console.log("====================================");
      console.log(req);
      console.log("====================================");
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.applyTheme()}
        <NavBar
          onChange={this.changeTheme}
          themeIcon={
            this.state.darkTheme ? <NightsStayIcon /> : <WbSunnyIcon />
          }
        />
        <SelectFeed onChange={this.onChange} />
        {this.state.posts.map((post, index) => (
          <FeedPost
            key={index}
            imageUrl={post.imageUrl}
            title={post.postTitle}
            upvotes={post.postUpvotes}
            link={post.postLink}
            createTime={post.postCreateTime}
            author={post.author}
            handleLike={(e) => {
              this.handleLike(e, post.postLink);
            }}
            data={this.props.data}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Feed;
