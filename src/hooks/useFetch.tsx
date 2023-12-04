import { IDoctor } from "../types/doctor";
import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";

export default function useFetch(pageNumber: number) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [doctors, setDoctors] = useState<Array<IDoctor>>([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel: Canceler
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_API_URL}/api/doctors`,
            params: { page: pageNumber, limit: 10 },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then(res => {
            setDoctors(prev => ([...prev, ...res.data.results]))
            setHasMore(res.data.results.length > 0)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        //console.log(doctors)
        return () => cancel()
    }, [pageNumber])
    return { loading, error, doctors, hasMore }
}