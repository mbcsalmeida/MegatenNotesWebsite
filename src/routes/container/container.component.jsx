import '../../App.css';
import ReactMarkdown from 'react-markdown';
import {MarkdownContainer} from './container.styles.jsx'
import FloatingActionButton from '../../components/floating-action-button/fab.component';
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import {fetchPage} from "../../api/axios";
import {useQuery} from "react-query";
import {useEffect, useState} from "react";
import {Loading} from "../../components/loading/loading";
import {Error} from "../../components/error/error";

export const MainContainer = (props) => {

    const [initialFetchDone, setInitialFetchDone] = useState(false);
    const { data: page, isLoading, isError, isSuccess, refetch } = useQuery('page', () => fetchPage(props.pageURL), {
        enabled: initialFetchDone  // Disable the initial fetch until the flag is set to true
    });

    useEffect(() => {
        if (!initialFetchDone) {
            // Set the flag to true after the first render
            setInitialFetchDone(true);
        } else {
            // This effect will be triggered whenever props.pageURL changes after initial fetch
            refetch();
        }
    }, [props.pageURL, refetch, initialFetchDone]);
    const changeImageDisplay = () => {
        this.setState(prevState => ({
            imgs: !prevState.imgs
        }))
    }

    return (<div className='main-page-background'>
        <MarkdownContainer className={props.notes ? "main-container-notes" : ""}
        >
            {isLoading && <>
                <Loading />
            </>}
            {isSuccess && <div>
                <ReactMarkdown
                    children={page}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                />
                <FloatingActionButton anchor={props.pageURL} imgFun={changeImageDisplay}/>
            </div>}
            {isError && <>
                <Error />
            </>}
        </MarkdownContainer>
        </div>
    )
}

