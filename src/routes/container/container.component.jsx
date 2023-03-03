import '../../App.css';
import ReactMarkdown from 'react-markdown';
import { Component } from 'react';
import {MarkdownContainer} from './container.styles.jsx'

export default class MainContainer extends Component {
    
    constructor(props) {
        super(props)

        this.state = { content: null }
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
            <MarkdownContainer>
                <ReactMarkdown className="Markdown-Container" children={this.state.content}/>
            </MarkdownContainer>
      )
    }
}

