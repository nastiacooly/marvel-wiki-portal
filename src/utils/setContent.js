import Skeleton from "../components/skeleton/skeleton";
import Spinner from "../components/spinner/spinner";
import ErrorView from "../components/error-view/error-view";

const setContent = (process, character, Component, characterComics=null) => {
    switch (process) {
        case 'idle':
            return characterComics ? <Skeleton /> : <Spinner />;
        case 'loading':
            return <Spinner />;
        case 'success':
            return <Component character={character} characterComics={characterComics}/>;
        case 'failure':
            return <ErrorView flex="row"/>
        default:
            throw new Error("Unexpected process state");
    }
}

const setListContent = (process, Component) => {
    switch (process) {
        case 'idle':
            return <Spinner />;
        case 'loading':
            return <><Component />: <Spinner /></>;
        case 'success':
            return <Component />;
        case 'failure':
            return <ErrorView flex="column"/>
        default:
            throw new Error("Unexpected process state");
    }
}

export default setContent;
export {setListContent};