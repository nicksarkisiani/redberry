import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {estateSlice, fetchEstates, addEstate} from "../store/reducers/estate/estate.slice";
import {fetchData} from "../store/reducers/location/location.slice";
import {fetchAgents, addAgent} from "../store/reducers/agents/agents.slice";
import {filterSlice} from "../store/reducers/filter/filter.slice";

const rootActions = {
    ...estateSlice.actions,
    ...filterSlice.actions,
    fetchEstates,
    fetchData,
    fetchAgents,
    addEstate,
    addAgent
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(rootActions, dispatch)
};