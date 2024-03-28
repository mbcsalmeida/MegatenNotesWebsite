import {useEffect, useState} from 'react'
import {
    TrackerRootContainer,
    TrackerListContainer,
    TrackerFields,
    TrackerAreaBoxes,
    TrackerFieldsBox
} from './tracker.styles';
import {useQuery} from "react-query";
import {fetchDemons} from "../../api/axios";
import {Loading} from "../loading/loading";
import {Error} from "../error/error";

function Tracker() {
    const [clickedDemons, setClickedDemons] = useState(() => {
        // Load clicked demons from local storage or default to an empty object
        const storedClickedDemons = localStorage.getItem('clickedDemons');
        return storedClickedDemons ? JSON.parse(storedClickedDemons) : {};
    });

    const [initialFetchDone, setInitialFetchDone] = useState(false);
    const {
        data: demonsData,
        isLoading,
        isError,
        isSuccess,
        refetch
    } = useQuery('data', () => fetchDemons('demons.json'), {
        enabled: initialFetchDone  // Disable the initial fetch until the flag is set to true
    });

    useEffect(() => {
        const saveToLocalStorage = () => {
            localStorage.setItem('clickedDemons', JSON.stringify(clickedDemons));
        };

        window.addEventListener('beforeunload', saveToLocalStorage);

        return () => {
            window.removeEventListener('beforeunload', saveToLocalStorage);
        };
    }, [clickedDemons]);

    useEffect(() => {
        if (!initialFetchDone) {
            // Set the flag to true after the first render
            setInitialFetchDone(true);
            console.log(demonsData)
        } else {
            // This effect will be triggered whenever props.pageURL changes after initial fetch
            refetch();
        }
    }, [initialFetchDone, refetch]);
    const handleDemonClick = (demonId) => {
        setClickedDemons((prevClickedDemons) => ({
            ...prevClickedDemons,
            [demonId]: !prevClickedDemons[demonId],
        }));
    };

    const totalClicked = Object.values(clickedDemons).filter(Boolean).length;

    return (
        <TrackerRootContainer>
            <header>
                <h1>Shin Megami Tensei 1 - Demon Tracker</h1>
            </header>
            {isLoading && <>
                <Loading/>
            </>}
            {isSuccess &&
                <section>
                    <TrackerListContainer>
                        {Object.entries(demonsData["data"]).map(([area, info]) => {
                            return (<div key={area + "demons"}>
                                <h3>{area}</h3>
                                <TrackerAreaBoxes>
                                    <img src={info['imageURL']}></img>
                                    <TrackerFieldsBox>
                                        {info['demons'].map((demon) => (
                                            <TrackerFields key={area + demon.id}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={clickedDemons[demon.id]}
                                                        onChange={() => handleDemonClick(demon.id)}
                                                    />
                                                    <span className="checkmark"></span>
                                                    {demon.name}
                                                </label>
                                            </TrackerFields>
                                        ))}
                                    </TrackerFieldsBox>
                                </TrackerAreaBoxes>
                            </div>)
                        })}
                    </TrackerListContainer>
                    <br/>
                    <footer>
                        <h3>
                            Total: {totalClicked} / {demonsData['totalDemons']}
                            <svg
                                fill="#FFFFFF"
                                height="30"
                                width="30"
                                version="1.1"
                                id="Capa_1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 489.645 489.645" xml:space="preserve"
                                onClick={() => setClickedDemons({})} // Reset clicked demons to empty object
                                style={{cursor: 'pointer'}}
                            >
                                <g>
                                    <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3
                                        c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5
                                        c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8
                                        c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2
                                        C414.856,432.511,548.256,314.811,460.656,132.911z"/>
                                </g>
                            </svg>
                        </h3>

                    </footer>
                </section>
            }
            {isError && <>
                <Error/>
            </>}
        </TrackerRootContainer>
    )
        ;
}

export default Tracker