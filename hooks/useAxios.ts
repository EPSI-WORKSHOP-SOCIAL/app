import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuth } from "@clerk/clerk-expo";

interface FetchDataParams {
	uri: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	options?: AxiosRequestConfig;
	body?: any;
}

const useAxios = <T = any>() => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { getToken } = useAuth();

	const fetchData = useCallback(async ({ uri, method = "GET", options = {}, body = null }: FetchDataParams): Promise<void> => {
		setLoading(true);
		setError(null);

        const url = `${process.env.EXPO_PUBLIC_API_URL}/${uri}`;

		try {
            const token = await getToken();

            options = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                ...options
            };
            
			const response: AxiosResponse<T> = await axios({
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
