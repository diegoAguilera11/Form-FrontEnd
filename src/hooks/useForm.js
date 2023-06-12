import { useState } from 'react';

export const useForm = () => {
    const [state, setState] = useState({});

    const onChange = (value, field) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return {
        ...state,
        form: state,
        onChange,
    };

}