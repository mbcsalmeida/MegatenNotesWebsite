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

        this.state = {
            content : null, 
            imgs: true
        }
        this.updatePage()
        
        if(this.props.location.pathname.includes("/notes")){
            this.className = "main-container-notes"
            this.fabStyle = {
                display: "inline-flex"}
       }else{
            this.fabStyle = {display: "none"}
       }
       
       this.changeImageDisplay = this.changeImageDisplay.bind(this)
    }

    updatePage(){
        const page = `${process.env.PUBLIC_URL}/pages/${this.props.pageURL}`
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

    changeImageDisplay(e){
        this.setState(prevState => ({
            imgs: !prevState.imgs
        }))
    }

    changeMarkdownContainerClass(){
        //return this.state.imgs ? this.className : `${this.className} no-images`
        return this.state.imgs ? "Markdown-Container"  : "Markdown-Container no-images" 
    }

    render() {
        return (
            <div>
                <MarkdownContainer className={this.className}>
                    <ReactMarkdown 
                    className={this.changeMarkdownContainerClass()}
                    children={this.state.content}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                    />
                </MarkdownContainer>
                <FloatingActionButton style={this.fabStyle} anchor={this.props.pageURL} imgFun={this.changeImageDisplay}/>
            </div>
      )
    }
}

