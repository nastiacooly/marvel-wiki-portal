import { useState, useCallback } from "react";

export enum HttpRequestState {
	IDLE = "idle",
	LOADING = "loading",
	SUCCESS = "success",
	FAILURE = "failure",
}

/**
 * Custom hook for http-requests.
 * Returns method to get data from url and to set corresponding 'process' state.
 * Also returns state values and clearError method.
 */
export const useHttpRequest = () => {
	const [process, setProcess] = useState<HttpRequestState>(
		HttpRequestState.IDLE
	);

	const request = useCallback(
		async (
			url: string,
			method = "GET",
			body = null,
			headers = { "Content-type": "application/json" }
		) => {
			setProcess(HttpRequestState.LOADING);

			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(`Could not fetch ${url}, status: ${response.status}`);
				}

				const data = await response.json();
				return data;
			} catch (e) {
				setProcess(HttpRequestState.FAILURE);
				throw e;
			}
		},
		[]
	);

	const clearError = useCallback(() => {
		setProcess(HttpRequestState.LOADING);
	}, []);

	return {
		process,
		setProcess,
		request,
		clearError,
	};
};
