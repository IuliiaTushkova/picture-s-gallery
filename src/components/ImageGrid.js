import React from 'react';
import UseFirestore from '../hooks/UseFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = UseFirestore('images');

    return (

            <div className='img-grid'>
                { docs && docs.map(doc => (
                    <div className='image-wrap-wrapper'>
                        <motion.div className='image-wrap'
                             whileHover={{ scale: 1.2}}
                             whileTap={{
                                        scale: 0.8,
                                        rotate: -20
                                    }}
                             key={doc.id}
                             onClick={() => setSelectedImg(doc.url)}

                        >
                            <span className='btn-delete'>X</span>
                            <img src={ doc.url } alt={ doc.name } className='img'/>
                        </motion.div>
                    </div>
                )) }
            </div>


    )
}
export default ImageGrid;