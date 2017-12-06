import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

  constructor(props){
    super(props);
    this.backdrop = null;
  }

  //we've stopped the render tree
  render() {
    //open the portal by rendering nothigng that will ever change
    return null;
  }

  componentDidMount() {

    this.backdrop = document.createElement('div');
    //add classes
    this.backdrop.className = "backdrop";
    this.backdrop.className += " transition-opac";
    this.backdrop.className += " off";

    document.body.appendChild(this.backdrop);

    //render the dialog content
    this.renderDialogContent(this.props);

  }

  //when get new props also renderDialogContent
  componentWillReceiveProps(newProps) {
    //render the children
    this.renderDialogContent(newProps);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.backdrop);
    document.body.removeChild(this.backdrop);
  }

  openModal() {

    this.backdrop.style.display = "block";

    let that = this;
    setTimeout(function(){
      that.backdrop.className = "backdrop";
      that.backdrop.className += " transition-opac";
      that.backdrop.className += " on";
    }, 100);

  }

  close(e) {
    e.preventDefault();

    this.backdrop.className = "backdrop";
    this.backdrop.className += " transition-opac";
    this.backdrop.className += " off";

    let that = this;
    setTimeout(function(){
      that.backdrop.style.display = "none";
    }, 100);
  }

  //call this on pressing enter...
  submitPhone() {
    this.props.onSubmit();
  }


  renderDialogContent(props) {

    //using ReactDom.render we started a new render tree
    //rendering the children props to the portal we created
    ReactDOM.render(
      <div>
        <div className="modal flow-component-child">
          <div onClick={e => this.close(e)} className="x-close"><i className="fa fa-times" aria-hidden="true"></i></div>
          <div className="modal-inner">
            {this.props.children}
          </div>
        </div>
      </div>, 
      this.backdrop);

  }

}

export default Modal;