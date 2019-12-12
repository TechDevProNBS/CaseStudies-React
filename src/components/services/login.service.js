const api = 'http://51.11.59.169:4500/login';

export default class LoginService {

    login = (_body) => {

        return fetch(`${api}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_body)
        })
            .then(response => response.status === 200 ? response.json() : response.json().catch(err => err))

    }

}
