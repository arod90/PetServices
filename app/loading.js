import './loading.css';
import { FaImage } from 'react-icons/fa';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="loading-container animate-pulse">
      <div className="load-h1"></div>
      <div className="card-container-load">
        <div className="featured-card-load">
          <div className="img-cont">
            <div className="load-img">
              <FaImage size={30} className="load-icon" />
            </div>
          </div>
          <div className="content-cont">
            <div className="load-header"></div>
            <div className="load-content"></div>
          </div>
        </div>
        <div className="featured-card-load">
          <div className="img-cont">
            <div className="load-img">
              <FaImage size={30} className="load-icon" />
            </div>
          </div>
          <div className="content-cont">
            <div className="load-header"></div>
            <div className="load-content"></div>
          </div>
        </div>
        <div className="featured-card-load">
          <div className="img-cont">
            <div className="load-img">
              <FaImage size={30} className="load-icon" />
            </div>
          </div>
          <div className="content-cont">
            <div className="load-header"></div>
            <div className="load-content"></div>
          </div>
        </div>
        <div className="featured-card-load">
          <div className="img-cont">
            <div className="load-img">
              <FaImage size={30} className="load-icon" />
            </div>
          </div>
          <div className="content-cont">
            <div className="load-header"></div>
            <div className="load-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
