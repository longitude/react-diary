import React, { Component } from "react";

class ModalContent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  openModal(event) {
    event.stopPropagation();
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div onClick={this.hideModal.bind(this)} className="modal-container">
        {this.state.showModal
          ? <Modal hideModal={this.hideModal.bind(this)} />
          : null}
        <button onClick={this.openModal.bind(this)}>open modal</button>
      </div>
    );
  }
}

class Modal extends Component {
  stopPropagation(event) {
    event.stopPropagation();
  }
  render() {
    return (
      <div onClick={this.stopPropagation.bind(this)} className="modal">
        <button onClick={this.props.hideModal}>x</button>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu
          metus, mattis in pharetra nec, ornare vel eros. Cras dapibus elit eu
          ex luctus. Holita.
        </div>
      </div>
    );
  }
}

export default ModalContent;
