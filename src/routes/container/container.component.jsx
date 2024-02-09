import '../../App.css';
import ReactMarkdown from 'react-markdown';
import {MarkdownContainer} from './container.styles.jsx'
import FloatingActionButton from '../../components/floating-action-button/fab.component';
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import {fetchPage} from "../../api/axios";
import {useQuery} from "react-query";


/*export default class MainContainer extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            content : null, 
            imgs: true
        }

        getPage(this.props.pageURL).then(
        )
       
       this.changeImageDisplay = this.changeImageDisplay.bind(this)
    }



    updatePage(){
        const page = `https://github.com/mbcsalmeida/MegatenNotesWebsite/tree/main/public/pages/${this.props.pageURL}`
        fetch(page)
            .then((response) => response.text())
            .then((text) => {this.setState({content : text })})  
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.pageURL !== this.props.pageURL || prevState.content !== this.state.content){

        }
    }

    changeImageDisplay(e){
        this.setState(prevState => ({
            imgs: !prevState.imgs
        }))
    }

    changeMarkdownContainerClass(){
        return this.state.imgs ? "Markdown-Container"  : "Markdown-Container no-images" 
    }

    render() {
        return (
            <div className='main-page-background'>
                <MarkdownContainer 
                className={this.className}
                >
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
}*/

export const MainContainer = (props) => {

    const {data: page, isLoading, isError, isSuccess} = useQuery('page', ()=>fetchPage(props.pageURL))

    const changeImageDisplay = (e) => {

    }

    const changeMarkdownContainerClass = () => {

    }

    return (<>
        {isLoading && <></>}
        <div className='main-page-background'>
            <MarkdownContainer
            >
                <ReactMarkdown
                    className={changeMarkdownContainerClass()}
                    children={page}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                />
            </MarkdownContainer>
            <FloatingActionButton anchor={props.pageURL} imgFun={changeImageDisplay}/>
        </div>
        {isError && <></>}
        </>
    )
}

