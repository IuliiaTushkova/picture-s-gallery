import React, {useState} from 'react';
import './App.css';
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

import ProgressBar from "./components/ProgressBar";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

const titleText = 'Art vectoriel';

function App() {
    const [file, setFile] = useState(null);

    const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className='w-100'>
        <header className='w-100 flex-centered title-container'>
            <Title text={titleText}/>
        </header>

            <section className='w-100 flex-centered'>
                <UploadForm
                    file={file}
                    setFile={setFile}
                />
            </section>
            <div className='w-100 flex-centered'>
                <section className='nav-bar-wrapper'>
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </section>
            </div>


            <section className='w-100 flex-centered'>
                <ImageGrid setSelectedImg={setSelectedImg}/>
                { selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg}/> }
            </section>
            <Footer/>
    </div>
  );
}

export default App;
