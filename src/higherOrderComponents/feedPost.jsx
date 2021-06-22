import React from 'react';
import './feedpost.css';

const FeedPost = (props) => {
  return (
    <div>
      <div className="feedpost-center">
        <props.post
          key={props.index}
          data={props.data}
          imageUrl={props.imageUrl}
          link={props.link}
          handleLike={props.handleLike}
          time={props.createTime}
          title={props.title}
          theme={props.theme}
          index={props.index}
          // feed
          author={props.author || ''}
          upvotes={props.upvotes || ''}
          // recipe
          ingredients={props.ingredients || ''}
          healthLabels={props.healthLabels || ''}
          dietLabels={props.dietLabels || ''}
          recipeID={props.recipeID || ''}
          serving={props.serving || ''}
        />
      </div>
    </div>
  );
};

export default FeedPost;
