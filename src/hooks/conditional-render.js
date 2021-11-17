import ErrorView from "../components/error-view/error-view";
import Spinner from "../components/spinner/spinner";


const useConditionalRender = (error, errorMessage, loaded, content, loadMore=false, flex=null) => {
    /**
     * Returns different content for rendering
     * depending on error and loaded states.
     */
    if (error) {
        return <ErrorView message={errorMessage} flex={flex} />;
    }
    if (loaded) {
        return content;
    }
    /* In case of loading additional items, spinner should be placed under previous items */
    if (loadMore) {
        return <>{content} <Spinner /></>;
    }
    return <Spinner />;
}

export default useConditionalRender;