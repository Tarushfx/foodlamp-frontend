import React, { Component } from "react";
import FeedPost from "../higherOrderComponents/feedPost";
import NavBar from "../components/navbar";
import "../css/body.css";
import { getFeed } from "../services/feedService";
import SelectFeed from "../components/selectFeed";
import http from "../services/httpService";
import { getEmail, getToken } from "../services/authService";
import LoadMorePosts from "../components/LoadMorePosts";
import FeedCard from "../components/feedCard";
import { getRecipes, likeRecipe } from "../services/recipeService";
import { Redirect, useHistory } from "react-router";

class Feed extends Component {
  state = {
    category: "hot",
    posts: [],
    limit: 20,
    theme: this.props.theme,
  };

  onChange = async (e) => {
    let posts = [],
      category = e.target.id;
    this.setState({ posts });
    this.setState({ category });
    document
      .getElementById("selectFeedButtonGroup")
      .childNodes.forEach(
        (item) => (item.style.backgroundColor = this.props.theme.secondary)
      );
    // console.log(document.getElementById("selectFeedButtonGroup").childNodes);
    document.getElementById(category).style.backgroundColor =
      this.props.theme.primary;

    const feedArray = await getFeed(this.state.category, this.state.limit);
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
    const feedArray = await getFeed(this.state.category, this.state.limit);
    const posts = this.getPosts(feedArray);
    this.setState({ posts });
    document.body.style.backgroundColor = this.state.theme.primary;
  }
  //debug later
  componentDidUpdate() {
    document.body.style.backgroundColor = this.state.theme.primary;
  }

  handleLike = async (e, name, link) => {
    try {
      console.log(e, link);
      await likeRecipe(name, `www.reddit.com${link}`);
      this.props.loadData();
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          onChange={this.props.changeTheme}
          theme={this.props.theme}
          data={this.props.data}
          loadData={this.props.loadData}
        />
        <SelectFeed onChange={this.onChange} theme={this.props.theme} />
        {this.state.posts.map((post, index) => (
          <FeedPost
            post={FeedCard}
            key={index}
            imageUrl={post.imageUrl}
            title={post.postTitle}
            upvotes={post.postUpvotes}
            link={post.postLink}
            createTime={post.postCreateTime}
            author={post.author}
            theme={this.props.theme}
            handleLike={(e) => {
              this.handleLike(e, post.postTitle, post.postLink);
            }}
            data={this.props.data}
          />
        ))}
        {this.state.limit < 100 && this.state.posts.length !== 0 && (
          <LoadMorePosts
            handleClick={async () => {
              if (this.state.limit <= 80) {
                const feedArray = await getFeed(
                  this.state.category,
                  this.state.limit + 20
                );
                let posts = [].concat(this.state.posts);
                posts = posts.concat(this.getPosts(feedArray).slice(-20));
                this.setState({ posts: posts });
                this.setState({ limit: this.state.limit + 20 });
              }
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Feed;
