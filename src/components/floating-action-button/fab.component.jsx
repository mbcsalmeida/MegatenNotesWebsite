import { Component } from 'react';
import { FloatingActionBar, FloatingActionBarBlock, FloatingActionBarIcon, FloatingActionBarText } from './fab.styles';
import Fab from '@mui/material/Fab ';

export default class FloatingActionButton extends Component {

    constructor(){
        super()

        this.state = {
            showImg: false
        }

    }

    render(){
        return(
            <Fab color="primary" aria-label="add">
                <FloatingActionBarBlock>
                    <FloatingActionBarText>{this.showImg ? "ShowImages" : "Hide Images"}</FloatingActionBarText>
                    <FloatingActionBarText>Anchors</FloatingActionBarText>
                </FloatingActionBarBlock>
                <FloatingActionBarIcon />
            </Fab>
        );
    }
}