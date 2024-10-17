import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuth } from "@clerk/clerk-expo";

interface FetchDataParams {
	uri: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	options?: AxiosRequestConfig;
	body?: any;
}

const useAxios = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

    const { getToken } = useAuth();

	const fetchData = useCallback(async ({ uri, method = "GET", options = {}, body = null }: FetchDataParams): Promise<void> => {
		setLoading(true);
		setError(null);

        const url = `${process.env.API_URL}/${uri}`;

		try {
            const token = await getToken();

            options = {
                headers: {
                    'Authorization': token
                },
                ...options
            };

			const response: AxiosResponse = await axios({
				url,
				method,
				...options,
				...(body && { data: body }),
			});
            
			setData(response.data);
		} catch (err: any) {
			setError(err.message || "An error occurred");
		} finally {
			setLoading(false);
		}
	}, []);

	return { data, error, loading, fetchData };
};

export default useAxios;
