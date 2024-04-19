import { Contacts } from "..";

export interface CardProps {
    contact: Contacts,
    onChangeModalIsOpen: (id: number) => void
}