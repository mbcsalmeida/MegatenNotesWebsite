import '../../App.css';
import ReactMarkdown from 'react-markdown';
import { Component } from 'react';
import {MarkdownContainer, FloatingActionBar, FloatingActionBarIcon, FloatingActionBarBlock, FloatingActionBarText} from './container.styles.jsx'


export default class MainContainer extends Component {
    
    constructor(props) {
        super(props)

        this.state = { content: null }
        
        if(this.props.location.pathname.includes("/notes")){
            this.className = "main-container-notes"
       }
    }

    updatePage(){
        const page = "pages/" + this.props.pageURL
        fetch(page)
            .then((response) => response.text())
            .then((text) => this.setState({ content: text })) 
    }

    componentDidUpdate(){
        this.updatePage();
    }

    componentDidMount() {
        this.updatePage();   
    }

    render() {
        return (
            <MarkdownContainer className={this.className}>
                <ReactMarkdown className="Markdown-Container" children={this.state.content}/>
                <FloatingActionBar>
                    <FloatingActionBarBlock>
                        <FloatingActionBarText>Kichijoji</FloatingActionBarText>
                        <FloatingActionBarText>Shibuya</FloatingActionBarText>
                        <FloatingActionBarText>Cathedral</FloatingActionBarText>
                    </FloatingActionBarBlock>
                    <FloatingActionBarIcon />
                </FloatingActionBar>
            </MarkdownContainer>
      )
    }
}

