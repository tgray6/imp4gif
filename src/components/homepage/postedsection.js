import React from 'react';
import {connect} from 'react-redux';

// import {fetchItems} from '../actions/actions';
import {fetchProtectedData} from '../actions/protected';

import {Link} from 'react-router-dom';

import './homepage.css';


export class PostedSection extends React.Component {

    componentDidMount() {
    	console.log("PostedSection is Rendering here")
        this.props.dispatch(fetchProtectedData());
    }


	renderResults(){
		return this.props.items.map((items) => {
			if (items.type==="video"){
				return (
					<div className="flexItem" key={items.id}>
            			<Link to={`/${items.id}`}>
            			<div className="blocker"></div>
            			<video height="auto" width="100%" className="flexImage1">
            			<source src={items.url} type="video/mp4" alt="postedlink"/>
           				</video></Link>

           			</div>
				)
			}

			else if (items.type==="youtube") {
				return (
					<div className="flexItem"  key={items.id}>
            			<Link to={`/${items.id}`} className="linkwrap">
            			<div className="blocker"></div>
						<iframe className="flexImage1" title="youtube video" src={items.youTubeUrl} frameBorder="0" showinfo="0"></iframe>

            			</Link>

           			</div>	
				)
			}

			else{
				return ( 
					<div className="flexItem" key={items.id}>
						<Link to={`/${items.id}`}><img src={items.url} className="flexImage1"  alt="postedlink">
						</img></Link>

        			</div>
        		) 
			}
		});
    }
    render(){
   	  return (
   	 	<div>
   	 	<header><h1>Recent Posts</h1></header>
     	<section className="postedSectionHome">
       		<div className="flexContainer">
        		{this.renderResults()}
        	</div>
      	</section>
      	</div>
      );
	}
}

// const mapStateToProps = state => {
//     // const {currentUser} = state.auth;
//     // return {
//         // username: state.auth.currentUser.username,
//         // nickname: state.auth.currentUser.nickname,
//         items: state.protectedData.data
//     // };
// };

const mapStateToProps = state => ({
  items: state.protectedData.data
  // itemToDisplay: state.imp.items.find((post) => post.id === props.match.params.postId)
});

export default connect(mapStateToProps)(PostedSection);


//NOTE we removed the handleClickGen function since we are using Router Link now:  onClick={this.handleClickGen(items.id)}.

//We used to use this to get the id of the current clicked object, using our reducer INDIVIDUAL_RENDER using the state.items.find. We now use the below, which is on itemtodisplay.js. This is similar to our reducer, but its not equal to the action.id anymore, its equal to the router: props.match.params.postId(postID path is declared on App.js).

//  itemToDisplay: state.items.find((post) => post.id == props.match.params.postId)







// export default function PostedSection (props) {
//     return (
//       <section className="postedSection">
//         <div className="flexContainer">
//         	<FlexImage />
//         	<FlexVideo />
//         </div>
//       </section>
//     );
// }