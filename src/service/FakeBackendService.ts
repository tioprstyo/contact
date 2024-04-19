import api from "../api-client";
import {ApiConstants} from "../utils/ApiConstants";

export default class FakeBackendService {
    static getContact = () => {
        return api.get(ApiConstants.allContacts);
    }
    static deleteContact = (id: string) => {
        return api.delete(`${ApiConstants.allContacts}/${id}`);
    }
}