import Dot from '../../assets/dot.svg';
import Arrow from '../../assets/left-arrow.svg';
import '../../styles/components/ImageSlider.css';
import { useState } from 'react';

const ImageSlider = ({ srcList }) => {
  const imageCount = srcList.length;
  const [imageNum, setImageNum] = useState(1);

  const getNextImageNum = () => {
    return imageNum < imageCount ? imageNum + 1 : 1;
  }

  const getPrevImageNum = () => {
    return imageNum > 1 ? imageNum - 1 : imageCount;
  }

  const toNextImage = () => {
    setImageNum(getNextImageNum());
  }

  const toPrevImage = () => {
    setImageNum(getPrevImageNum());
  }

  const toImage = (val) => {
    setImageNum(val);
  }

  return (
    <div className="imageContainer">
      {
        srcList.map((src, i) =>
          <img key={i} src={src} alt={`number ${i}`}
            className={`sliderImage 
          ${i + 1 === imageNum ? 'shownImage' : ''}
          ${i + 1 === getNextImageNum() ? 'nextImage' : ''}
          ${i + 1 === getPrevImageNum() ? 'prevImage' : ''}`} />
        )
      }
      <div className="imageFrame">
        <div className="arrowContainer">
          <img className="imageSliderLeftArrow arrow" src={Arrow} alt="L" onClick={toPrevImage} />
          <img className="imageSliderRightArrow arrow" src={Arrow} alt="R" onClick={toNextImage} />
        </div>
        <div className="dotContainer">
          {
            srcList.map((src, i) => <img key={i} src={Dot} alt='' onClick={() => toImage(i + 1)}
              className={`dot ${i + 1 === imageNum ? 'chosenDot' : ''}`} />)
          }
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;