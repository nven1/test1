import { useParams } from "react-router";

const useNumParams = (key = 'id') => {
    const params: any = useParams();
    return params[key] ? parseInt(params[key]) : null;
}

export default useNumParams;