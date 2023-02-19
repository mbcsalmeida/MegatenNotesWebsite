import '../../App.css';
import ReactMarkdown from 'react-markdown';
import { Component } from 'react';

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
            <div>
                <ReactMarkdown className="Markdown-Container" children={this.state.content}/>
            </div>
        );
    }
}

