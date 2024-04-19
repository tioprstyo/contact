/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { CardProps } from '../../../types';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
// import { BsTelephoneFill } from 'react-icons/bs';

const Card = ({ contact, onChangeModalIsOpen }: any) => {
    return (
        <div data-testid="card">
            <div className="bg-transparent md:py-4 md:px-6 p-4">
                <div className="flex text-left items-center">
                    <div className="flex">
                        <img src={contact.photo} className="md:w-24 w-10 md:h-24 h-10 mr-5 rounded-full object-cover" alt="" />
                        <div className="self-center">
                            <Link className="no-underline text-[#4A4A4A] items-center mb-2.5 line-clamp-1" to={`/contact/detail?first-name=${contact.firstName}&id=${contact.id}`}>
                                <p className="m-0 md:text-[0.9rem] text-[0.8rem] font-semibold self-center">Name: {contact.firstName} {contact.lastName}</p>
                            </Link>
                            <p className="m-0 md:text-[0.9rem] text-[#4A4A4A] text-[0.8rem] font-semibold self-center">Age: {contact.age}</p>
                        </div>
                    </div>
                    <div className="flex ml-auto justify-between text-left items-center">
                        <Link to={`/contact/edit?firstName=${contact.first_name}&id=${contact.id}`}>
                            <button className="md:p-2.5 p-1.5 hover:text-white hover:bg-[#00d1b2] text-[#00d1b2] cursor-pointer bg-none border border-[#00d1b2] rounded-md items-center inline-flex ">
                                <FiEdit className="md:w-[20px] md:h-[20px] w-[11.5px] h-[11.5px] md:translate-y-0 md:translate-x-[3px]" />
                                <span className="ml-1.5 md:block hidden">Edit</span>
                            </button>
                        </Link>
                        <button className="ml-1.5 text-red-500 p-1.5 hover:text-white hover:bg-red-500 md:p-2.5 cursor-pointer bg-none border border-red-500 rounded items-center inline-flex" onClick={() => onChangeModalIsOpen(contact.id)}>
                            <RiDeleteBin6Line className="md:w-auto md:h-auto w-2.5 h-2.5" />
                            <span className="ml-1.5 md:block hidden">
                                Delete
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;