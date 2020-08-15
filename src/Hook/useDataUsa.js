import React, { useState } from 'react';
import useSwr from 'swr';

const fetcher = (...args) =>
	fetch(...args).then((response) => response.json());

export const useDataUsa = async () => {
	const URL = 'https://www.trackcorona.live/api/countries';

	const { data, error } = useSwr(URL, { fetcher });

	const usaData = data && !error ? data.slice(0, 2000) : [];
	// const data = await fetch(URL)
	// 	.then((res) => res.json())
	// 	.then((res) => res.data)
	// 	.catch((err) => console.log('Error', err));
	return usaData;
};
