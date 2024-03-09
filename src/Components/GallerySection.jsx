import React from 'react';
import Myimg1 from "../images/IMG_7904.PNG";
import Myimg2 from "../images/IMG_7905.PNG";
import Myimg3 from "../images/IMG_7906.PNG";
import Myimg4 from "../images/IMG_7907.PNG";
import Myimg5 from "../images/IMG_7908.PNG";
import Myimg6 from "../images/IMG_7909.PNG";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="w-full h-auto rounded-lg"
            src={Myimg1}
            alt="Description 1"
          />
        </div>
        <div>
          <img
            className="w-full h-auto rounded-lg"
            src={Myimg2}
            alt="Description 2"
          />
        </div>
        <div>
          <img
            className="w-full h-auto rounded-lg"
            src={Myimg3}
            alt="Description 3"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="w-full h-auto rounded-lg"
            src={Myimg4}
            alt="Description 4"
          />
        </div>
        <div>
          <img
            className="w-full h-auto rounded-lg"
            src={Myimg5}
            alt="Description 5"
          />
        </div>
        <div>
          <img
            className="w-full h-auto rounded-lg"
            src={Myimg6}
            alt="Description 6"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
