import { TPost } from "../models"

export const postData = (body: TPost): void => {
    fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
}

export const editData = (body: TPost, id: string): void => {
    fetch(`http://localhost:7070/posts/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
}

export const deleteData = (id: string): void => {
    fetch(`http://localhost:7070/posts/${id}`, {
        method: 'DELETE',
    });
}
