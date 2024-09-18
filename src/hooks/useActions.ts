import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {estateSlice, fetchEstates} from "../store/reducers/estate/estate.slice";

const rootActions = {
    ...estateSlice.actions,
    fetchEstates
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(rootActions, dispatch)
};