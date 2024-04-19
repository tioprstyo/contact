import {ContactInfoInterface} from "../ContactInfoInterface";
import {CommonStateInterface} from "./CommonStateInterface";

export interface AllContactStateInterface extends CommonStateInterface {
    contacts: Array<ContactInfoInterface>,
}