import axios from "axios"
import Endpoints from "../environments/endpoints";
import { CommentType, PostType, UserType } from "../types/dataTypes"

const getPosts = () => {
    return axios
    .get<PostType[]>(`${Endpoints.apiEndpoint}/posts`)
    .then((res) => {
        return res.data
    })
}

const getComments = (postId: number) => {
    return axios
    .get<CommentType[]>(`${Endpoints.apiEndpoint}/posts/${postId}/comments`)
    .then((res) => {
        return res.data
    })
}

const getUsers = () => {
    return axios
    .get<UserType[]>(`${Endpoints.apiEndpoint}/users`)
    .then((res) => {
        return res.data
    })
}

const getUser = (userId: number) => {
    return axios
    .get<UserType>(`${Endpoints.apiEndpoint}/users/${userId}`)
    .then((res) => {
        return {id: res.data.id, name: res.data.name, username: res.data.username}
    })
}

const toExport = {
    getPosts,
    getComments,
    getUsers,
    getUser
}

export default toExport;