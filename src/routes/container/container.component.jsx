import '../../App.css';
import ReactMarkdown from 'react-markdown';
import { Component } from 'react';
import {MarkdownContainer} from './container.styles.jsx'
import FloatingActionButton from '../../components/floating-action-button/fab.component';
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'


export default class MainContainer extends Component {
    
    constructor(props) {
        super(props)

        this.state = {content : null}
        this.updatePage()
        
        if(this.props.location.pathname.includes("/notes")){
            this.className = "main-container-notes"
       }
    }

    updatePage(){
        const page = "pages/" + this.props.pageURL
        console.log(page)
         fetch(page)
            .then((response) => response.text())
            .then((text) => {this.setState({content : text })})  
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.pageURL !== this.props.pageURL || prevState.content !== this.state.content){
            this.updatePage()
        }
    }

    render() {
        return (
            <MarkdownContainer className={this.className}>
                <ReactMarkdown 
                className="Markdown-Container" 
                children={this.state.content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                />
                <FloatingActionButton />
            </MarkdownContainer>
      )
    }
}

