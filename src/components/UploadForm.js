import React, {useState} from 'react';
import { motion } from 'framer-motion';

const UploadForm = ({file, setFile}) => {
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/svg', 'image/jpg' ];

    const changeHandler = e => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        }else{
            setError('Le fichier doit être .svg / .png ou .jpg');
        }
    }
    return (
        <form className='load-illu-form'>
            <label>
                <motion.div className='load-illu'
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                >+</motion.div>
                <input type="file"
                       onChange={changeHandler}
                       accept="image/png, image/jpeg, image/svg"
                       className='btn-add-illu'
                       hidden
                />
            </label>

            {error && <div className='error'>{error}</div>}
            {file && <div>{file.name}</div>}
        </form>
    );
}

export default UploadForm;