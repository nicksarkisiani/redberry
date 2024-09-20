import React, {useState} from 'react';
import Filter from "../../shared/filter/Filter";
import CreateButtons from "../../shared/createButtons/CreateButtons";
import {PlusOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";
import AddAgentModal from "../../ui/agent/addAgentModal/AddAgentModal";

const Toolbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const changeIsModalOpen = (isOpen: boolean) => {
        setIsModalOpen(isOpen)
    }

    return (
        <div>
            <Filter/>
            <div>
                <CreateButtons textFirst={`აგენტის დამატება`} textSecond={"ლისტინგის დამატება"} icon={<PlusOutlined/>}
                               reverse={true} onClickSecond={() => navigate("/add-listing")}
                                onClickFirst={() => changeIsModalOpen(true)}
                />
                <AddAgentModal changeIsModalOpen={changeIsModalOpen} isModalOpen={isModalOpen}/>
            </div>
        </div>
    );
};

export default Toolbar;