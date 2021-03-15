import React, {useEffect} from 'react';
import useStorage from '../hooks/UseStorage';
const ProgressBar = ({file, setFile}) => {
    const {url, progress } = useStorage(file);
    useEffect(()=>{
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
      <div className='progress-bar flex-centered'
           style={{width : progress + '%'}} >
      </div>
    );
}

export default ProgressBar;