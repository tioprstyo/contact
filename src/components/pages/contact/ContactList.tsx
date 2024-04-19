import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllContactRequestAction} from "../../../redux-store/reducer/allContactSlice";
import { ContactInfoInterface } from "../../../interface/ContactInfoInterface";
import { Modal, Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { Card } from '../../components';
import { Link } from "react-router-dom";
import { AllContactStateInterface } from "../../../interface/redux-state/AllContactStateInterface";


export function ContactList() {
    const allContactState: AllContactStateInterface = useSelector((state: any) => state.allContact);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState<number>(0);
    
    const dispatch = useDispatch();

    const onCloseModalDelete = () => {
        setOpenModalDelete(false);
        setSelectedDeleteId(0);
    };

    const onDeleteContact = () => {
        console.log(selectedDeleteId)
    }

    const onOpenModalDelete = (id: number) => {
        setSelectedDeleteId(id);
        setOpenModalDelete(true);
    };

    useEffect(() => {
        dispatch(getAllContactRequestAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<>
        <div className="w-full">
            <div data-testid="contact-page" className='bg-[#FBFBFB] p-5'>
                <div className='text-white min-h-[100vh] text-sm-[calc(10px + 2vmin)]'>
                    <div className="flex flex-row justify-between mt-[20px]">
                        <h1 className="md:text-4xl text-2xl font-semibold text-[#00d1b2] m-0">Contacts</h1>
                        <Link to={"/contact/add"} className="self-center">
                            <button className="md:hidden inline-flex mt-2 self-center border-0 bg-white text-[#00d1b2] h-fit rounded-md font-semibold focus:opacity-5">
                                <MdAdd className="md:mr-1.5 m-0 w-6 h-6" />
                            </button>
                        </Link>
                        <Link className="ml-auto self-center" to={"/contact/add"}>
                            <button className="border py-2.5 px-7 bg-[#00d1b2] hover:text-[#00d1b2] border-[#00d1b2] hover:bg-white text-white font-semibold h-fit rounded-lg items-center inline-flex cursor-pinter md:inline-flex hidden">
                                <MdAdd className="md:mr-1.5 m-0 w-6 h-6" />Add Contact</button>
                        </Link>
                    </div>
                    <div className="mt-5">
                        {
                            allContactState.isLoading ? (
                                <div className="flex justify-center items-center h-[80vh]">
                                    <img className="w-[200px] h-auto" src={require('../../../assets/img/loading.gif')} alt={'loading'} />
                                </div>
                            ) : (
                                <>
                                    {
                                            allContactState && Array.isArray(allContactState.contacts) && allContactState.contacts.length > 0 ? allContactState.contacts.map((item: ContactInfoInterface, index: number) => (
                                            <Card contact={item} onChangeModalIsOpen={onOpenModalDelete} key={index} />
                                        )) : <></>
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
                <Modal
                    open={openModalDelete}
                    onClose={onCloseModalDelete}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white p-8">
                        <h2 id="child-modal-title" className="text-center font-semibold">Are you sure?</h2>
                        <p id="child-modal-description">
                            Do you really want to delete these contact?
                        </p>
                        <div className="text-center flex justify-between gap-8 mt-5">
                            <Button className="!text-white font-semibold !bg-red-500 !border !border-red-500 w-full mr-2.5 hover:!text-red-500 hover:!bg-white" onClick={onDeleteContact}>Yes</Button>
                            <Button className="!text-white font-semibold !bg-[#C1C1C1] !border !border-[#C1C1C1] w-full mr-2.5 hover:!text-[#C1C1C1] hover:!bg-white" onClick={onCloseModalDelete}>Cancel</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    </>)
}

export default ContactList;