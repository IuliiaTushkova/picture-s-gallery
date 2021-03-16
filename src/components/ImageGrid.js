import React from 'react';
import UseFirestore from '../hooks/UseFirestore';
import { motion } from 'framer-motion';
import UseStorageDelete from '../hooks/UseStorageDelete';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = UseFirestore('images');


    return (

            <div className='img-grid'>
                { docs && docs.map(doc => (
                    console.log(`documentReference.id   = ${doc.id}`),
                    console.log(`documentReference.path = ${doc.get}`),
                    <div className='image-wrap-wrapper'
                         key={doc.id}
                    >

                        <motion.div className='image-wrap'
                             whileHover={{ scale: 1.2}}
                             whileTap={{
                                        scale: 0.8,
                                        rotate: -20
                                    }}

                             onClick={() => setSelectedImg(doc.url)}

                        >
                            <span className='btn-delete' onClick={()=>{
                                UseStorageDelete(doc);
                            }}>X</span>
                            <img src={ doc.url } alt={ doc.name } className='img'/>
                        </motion.div>
                    </div>
                )) }
            </div>


    )
}
export default ImageGrid;