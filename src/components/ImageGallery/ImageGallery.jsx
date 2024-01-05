// ImageGallery.jsx
import React, { useState } from 'react';
import styles from './ImageGallery.module.scss';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          className={styles.galleryImage}
          src={`/assets/img/${image}`}
          alt={`Image ${index + 1}`}
          onClick={() => openModal(image)}
        />
      ))}

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={styles.modal} // Apply a custom style for the modal
        overlayClassName={styles.overlay} // Apply a custom style for the overlay
      >
        {selectedImage && (
          <div className={styles.modalContent}>
            <img
              src={`/assets/img/${selectedImage}`}
              alt="Full Size Image"
              className={styles.fullSizeImage}
            />
            <button className={styles.closeButton} onClick={closeModal}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
