import React from 'react';
import { connect } from 'react-redux';
import './homepage.css';
import {
  Link
} from 'react-router-dom';
import logo2 from '../landingpage/logo2.png';
import PostForm from '../postmodalform/postform';

import {togglePostForm} from '../actions/protected';
// import {logoutUser} from '../actions/actions';
// import {goHome} from '../actions/actions';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

class NavBar extends React.Component {


  toggleForm = () => {
    this.props.dispatch(togglePostForm());
    console.log(this.props.show);
  };



  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }


  render(){
   return (
    <div>
    <nav>
     <ul className="container">
        <Link to="/"><img src={logo2} id="navlogo" alt="logo"></img></Link>
        <li> 
        <button className="post" onClick={this.toggleForm}>Post</button> 
        </li>
        <li className="logoutSection">
          <p id="helloUser">{this.props.nickname} </p> 
          <button className="logoutUser" onClick={() => this.logOut()}>Logout</button>
        </li>
     </ul>
    </nav>
      {
      this.props.show?
      <PostForm />
      : null
      }
    </div>
  );
  };
}

// const mapStateToProps = state => ({
//   show: state.imp.show,
//   nickName: state.imp.nickName,
// });

const mapStateToProps = state => ({
    show: state.protectedData.show,
    nickname: state.auth.currentUser.nickname
})


export default connect(mapStateToProps)(NavBar);


















// export function NavBar(props) {
//   return (
//   <nav>
//     <ul className="container">
//       <Link to="/homepage"><img src={logo} id="navlogo" alt="logo"></img></Link>
//       <li className="logo"> 
//         <button className="post">Post</button> 
//       </li>
//       <li className="logoutSection">
//         <p className="helloUser">Hello {props.nickName} </p> 
//         <button className="logoutUser">Logout</button>
//       </li>
//     </ul>
 
//   </nav>
//   );
// }

// //<PostForm /> line 21, need it to render modal on click of post button

// const mapStateToProps = state => ({
//   nickName: state.nickName
// });

// export default connect(mapStateToProps)(NavBar);
