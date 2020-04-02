import React from 'react';

import img1 from "./img/img_01.jpg";

const Galery = () => {
    return(
        <div className="content__wrapper">
            <div className="content__leftBar fourth gallery">
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
                <div className="img"> <a href="../dist/images/img_01.jpg" data-lightbox="img_1" data-title="My caption"><img src={img1} alt=""/></a> </div>
            </div>
        </div>
    )
}

export default Galery;