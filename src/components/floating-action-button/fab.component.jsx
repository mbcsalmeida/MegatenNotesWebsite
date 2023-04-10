import { Component } from 'react';
import { FloatingActionBar, FloatingActionBarBlock, FloatingActionBarIcon, FloatingActionBarText } from './fab.styles';
import { Fab } from '@mui/material';
import anchors from '../../anchors.json';

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
    console.log(this.anchors)
  }

  toggleFab(e) {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions,
      showAnchors: false
    }));
  }

  toggleImages(e) {
    this.setState(prevState => ({
      showImg: !prevState.showImg
    }));
    this.props.imgFun();
  }

  toggleAnchors(e) {
    this.setState(prevState => ({
      showAnchors: !prevState.showAnchors
    }));
  }

  createAnchor(anchor){
    return "#"+anchor
  }

  render() {
    return (
      <FloatingActionBar>
        <Fab color="primary" aria-label="add"
          onClick={this.toggleFab}
          style={this.props.style}
          sx={{
            position: 'sticky',
            bottom: (theme) => theme.spacing(2),
            left: "85%",
            border: 2
          }}>
        </Fab>
        {this.state.showOptions &&
          <FloatingActionBarBlock>
            <FloatingActionBarText onClick={this.toggleImages}>{this.state.showImg ? "Show Images" : "Hide Images"}</FloatingActionBarText>
            <FloatingActionBarText onClick={this.toggleAnchors}>Anchors</FloatingActionBarText>
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

    );
  }
}
