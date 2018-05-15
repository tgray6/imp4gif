import React from 'react';
import { connect } from 'react-redux';

import './postpage.css';

import NavBar from '../homepage/navbar';
import PostedSection from './postedsection';
import CommentSection from './commentsection';

export function PostPage (props) {
    return (
      <div className="App">
      	<NavBar nickName="Xer0" />
      	<header><h1>{props.title}</h1></header>
      	<PostedSection />
      	<CommentSection />

      </div>
    );
}

const mapStateToProps = state => ({
  title: state.title
});

export default connect(mapStateToProps)(PostPage);

// PostPage.defaultProps = {
// 	title: "Test Title"
// }