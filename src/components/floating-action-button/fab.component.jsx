import { Component } from 'react';
import { FloatingActionBar, FloatingActionBarBlock, FloatingActionBarIcon, FloatingActionBarText } from './fab.styles';
import {Fab} from '@mui/material';

export default class FloatingActionButton extends Component {

    constructor(){
        super()

        this.state = {
            showOptions: false,
            showImg: false
        }
        this.toggleFab = this.toggleFab.bind(this)
    }

    toggleFab(e){
      this.setState(prevState => ({
      showOptions: !prevState.showOptions
      }));
    }

    render(){
        return(
            <Fab color="primary" aria-label="add" onClick={this.toggleFab}>
                {this.state.showOptions &&
                  <FloatingActionBarBlock>
                    <FloatingActionBarText>{this.showImg ? "ShowImages" : "Hide Images"}</FloatingActionBarText>
                    <FloatingActionBarText>Anchors</FloatingActionBarText>
                  </FloatingActionBarBlock>
                }
                
                 <FloatingActionBarIcon />
            </Fab>
        );
    }
}
