import React from 'react'

const apiService = {
    get: async (url: string): Promise<any> => {
        console.log('get', url);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    reject(new Error('Network response was not ok'));
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }
};

export default apiService
