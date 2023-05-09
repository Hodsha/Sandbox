import axios from 'axios';
import React, { Component, useEffect } from 'react'
import { Constants } from '../../constants/Constants';
import { IMovie } from '../../entities/IMovie';

export function createRepository(): Promise<IMovie> {
    return new Promise<IMovie>((resolve, reject) => {
        axios.get(Constants.localAPI).then((response) => {

            resolve(response.data);

        }).catch((error) => {
            reject(error);
        });
    })
}

