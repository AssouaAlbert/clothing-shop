import React, { Component } from 'react';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import Checkout from './pages/check-out/checkout.component';
import SingInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import {getUser} from './redux/user/user.selector';
import {setCurrentUser} from './redux/user/user-action';
import {
  Route, Switch, BrowserRouter as Router, Redirect
} from 'react-router-dom';
import './pages/homepage/hompage.style.scss';
import './App.scss';
class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   };
  // }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    /**
     * This function auto.onAuthStateChange returns a function which is used to close the connection
     * The connection between the application and fire base is always open (meaning the Application communicates with the BaaS all the time)
     *
     */
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => { //This is a callback funtion /If there is no user signed in it will return null
      // console.log('user: ', userAuth);  //Note that if the users State changes (e.g. Sign Out from all devices from another computer) this will change ()
      if (userAuth) { ///If thed user is signed in
        const userRef = await createUserProfileDocument(userAuth);
        /**
         * Remember that is works like so:
         * doc => snapshot => data
         * use .get, .set, .uodate, .remove for doc
         * use .onSnapShot etc for snapshot
         * use .data to retrive indormation in a particular shapshop
         */
        (await userRef).onSnapshot( snapShot => { //This is similar to the onAuthStateChanged but this is on snap shot change
          setCurrentUser({
              id: snapShot.id, //The id is the id of the snapShot
              ...snapShot.data()
            })
        });
      }
      setCurrentUser(userAuth);
      //Because the items have already been pushed to the database thus code will not be called again
      // await addCollectionAndDocuments('collections',collectionArray.map(({title,items}) =>({title, items}))).then(result => console.log(result));
    });
  }
  componentWillUnmount () {
    this.unsubscribeFromAuth(); //Use this to close the connection (If it is not closed it will show that the user is still active on the application)
  }
  render(){
    return(
      <div>
        <Router>
          <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/>) : <SingInUpPage/> }/>
        </Switch>
        </Router>
      </div>
    );
  }
}
// Note that the name dispatch can be any name because cennect;s second argument knows that it is a dispatch
const mapDispatchToProps = (dispatch) => {
  // store.dispatch(action)
  return {
    // 'setCurrentUser :' is not a function call. but a property returened by connect
    // user is from the combined reducer redux file clothing-shop\src\redux\redux-reducer.js
  setCurrentUser : user =>{ return dispatch(setCurrentUser(user)) }//anonymose functionl no name
  //IN the above code the state is changed and any one listening to that state e.g. header is rerendered
}}
//Read the current user from redux store
//store.user === {user}
const mapStateToProps = (store) => {
  return {
    currentUser: getUser(store),
    // collectionArray:selectCollectionForPreview(store) //Theitemshave already beenpushed tothe database
  }
}
//connect will return an object which will be properties of the App component
// export default connect(null, mapDispatchToProps)(App);
// The mapStateToProps is needhere to listen to the current user and redirect if the user is logged in i.e. not null
export default connect(mapStateToProps, mapDispatchToProps)(App);
