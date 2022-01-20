import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/VideoList.css";

class VideoList extends Component {
  state = {
    files: true,
  };

  render() {
    const handleFiles = () => {
      this.setState({
        files: !this.state.files,
      });
    };
    let className = [];

    let PlayIcon = [];

    if (this.props.playButton) {
      className = ["video-list", this.props.playButton];
    }

    if (this.props.completed) {
      PlayIcon = ["fa fa-check-circle", this.props.completed];
    } else if (!this.props.completed) {
      PlayIcon = ["fa fa-pause-circle"];
    }

    let file = this.props.video.files;

    return (
      <div className="d-block p-2  m-2">
        <div className={className.join(" ")}>
          <div className="play-title">
            <i className={PlayIcon.join(" ")} aria-hidden="true"></i>

            <span onClick={this.props.changed}> {this.props.title}</span>
          </div>
          <div
            className="video-duration"
            style={{ display: file ? "block" : "none" }}
          >
            <span onClick={handleFiles}>
              <i className=" fa fa-chevron-circle-down " />
            </span>
          </div>
        </div>
        <div
          className={className.join(" ")}
          style={{
            padding: "1rem",
            display: this.state.files ? "none" : "flex",
          }}
        >
          {file
            ? file.map((index) => {
                return (
                  <div
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1.2rem",
                    }}
                  >
                    <a href={index.url} download>
                      <i className="fa fa-file-pdf-o fs-2" />
                    </a>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default VideoList;
