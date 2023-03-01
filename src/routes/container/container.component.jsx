import '../../App.css';
import ReactMarkdown from 'react-markdown';
import { Component } from 'react';
import {MarkdownContainer} from './container.styles.jsx'

export default class MainContainer extends Component {
    

    constructor(props) {
        super(props)

        this.state = { content: null }
    }


    componentDidMount() {
        const page = "pages/" + this.props.pageURL
        fetch(page)
            .then((response) => response.text())
            .then((text) => this.setState({ content: text }))
    }

    render() {
        return (
            <MarkdownContainer>
                <ReactMarkdown className="Markdown-Container" children={this.state.content}/>
            </MarkdownContainer>
      )
    }
}

