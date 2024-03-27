import { Component } from 'react';
import { FloatingActionBar, FloatingActionBarBlock, FloatingActionBarIcon, FloatingActionBarText } from './fab.styles';
import { Fab } from '@mui/material';
import anchors from '../../res/anchors.json';
import Draggable from "react-draggable";
import icon from '../../res/iconfab.png'

export default class FloatingActionButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showOptions: false,
      showImg: false,
      showAnchors: false
    }
    this.toggleFab = this.toggleFab.bind(this)
    this.toggleImages = this.toggleImages.bind(this)
    this.toggleAnchors = this.toggleAnchors.bind(this)

    this.fetchAnchors()
  }

  fetchAnchors() {
    this.anchors = anchors[this.props.anchor]
  }

  toggleFab() {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions,
      showAnchors: false
    }));
  }

  toggleImages() {
    this.setState(prevState => ({
      showImg: !prevState.showImg
    }));
    this.props.imgFun();
  }

  toggleAnchors() {
    this.setState(prevState => ({
      showAnchors: !prevState.showAnchors
    }));
  }

  createAnchor(anchor) {
    return "#" + anchor
  }

  render() {
    return (
      <Draggable cancel={"Fab"}>
        <FloatingActionBar>
          <Fab color="primary" aria-label="add"
            onClick={this.toggleFab}
            style={this.props.style}
            sx={{
              position: 'sticky',
              bottom: (theme) => theme.spacing(2),
              left: "85%",
              border: 2,
              backgroundColor: "darkslateblue"
            }}>
            <FloatingActionBarIcon src={icon} />
          </Fab>
          {this.state.showOptions &&
            <FloatingActionBarBlock>
              <FloatingActionBarText onClick={this.toggleImages}>{this.state.showImg ? "Show Images" : "Hide Images"}</FloatingActionBarText>
              <FloatingActionBarText onClick={this.toggleAnchors}>Anchors</FloatingActionBarText>
              <FloatingActionBarText href={"https://mbcsalmeida.github.io/MegatenNotesWebsite/public/pages/" + this.props.anchor} target="_blank">Download</FloatingActionBarText>
            </FloatingActionBarBlock>
          }
          {this.state.showAnchors &&
            <FloatingActionBarBlock>
              {anchors[this.props.anchor].map((a) =>
                <FloatingActionBarText key={a} href={this.createAnchor(a)}>{a}</FloatingActionBarText>
              )}
            </FloatingActionBarBlock>
          }
        </FloatingActionBar>
      </Draggable>

    );
  }
}
