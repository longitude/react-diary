import React, { Component } from "react";

class ScrollerApp extends Component {
  initialPositions = [];
  addPositions(newPosition) {
    this.initialPositions.push(newPosition);
  }
  scroll(current, destination) {
    destination = this.convertTens(this.initialPositions[destination]);
    current = this.convertTens(current);
    let speed = 5;
    let interval = setInterval(() => {
      if (destination > current) {
        current += speed;
        window.scroll(0, current);
      } else if (destination < current) {
        current -= speed;
        window.scroll(0, current);
      } else {
        clearInterval(interval);
      }
    }, 0);
  }
  convertTens(number) {
    return Math.round(number / 10) * 10;
  }
  render() {
    return (
      <div>
        <Scroller scroll={this.scroll.bind(this)} />
        <ContentBox
          addPositions={this.addPositions.bind(this)}
          background={"red"}
        >
          One
        </ContentBox>
        <ContentBox
          addPositions={this.addPositions.bind(this)}
          background={"green"}
        >
          Two
        </ContentBox>
        <ContentBox
          addPositions={this.addPositions.bind(this)}
          background={"yellow"}
        >
          Three
        </ContentBox>
        <ContentBox
          addPositions={this.addPositions.bind(this)}
          background={"peru"}
        >
          Four
        </ContentBox>
        <ContentBox
          addPositions={this.addPositions.bind(this)}
          background={"lemongreen"}
        >
          Five
        </ContentBox>
      </div>
    );
  }
}

class Scroller extends Component {
  scroll(event) {
    this.props.scroll(event.pageY, parseInt(event.target.value, 10));
  }
  render() {
    let style = {
      position: "fixed",
      top: 60
    };
    return (
      <div style={style}>
        <button value="0" onClick={this.scroll.bind(this)}>
          one
        </button>
        <button value="1" onClick={this.scroll.bind(this)}>
          two
        </button>
        <button value="2" onClick={this.scroll.bind(this)}>
          three
        </button>
        <button value="3" onClick={this.scroll.bind(this)}>
          four
        </button>
      </div>
    );
  }
}

class ContentBox extends Component {
  render() {
    let style = {
      background: this.props.background,
      height: "500px",
      fontSize: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div
        ref={contentBoxOffset => (this.contentBoxOffset = contentBoxOffset)}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
  componentDidMount() {
    this.props.addPositions(this.contentBoxOffset.offsetTop);
  }
}

export default ScrollerApp;
