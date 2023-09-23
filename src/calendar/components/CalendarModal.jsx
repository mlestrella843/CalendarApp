import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const onCloseModal = () => {
        console.log('Cerrando Modal');
        setIsOpen(false);
    }

  return (
    <Modal
        isOpen={ isOpen }
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <h1>Hola Mundo</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere esse dignissimos doloremque deleniti voluptas. 
            Culpa optio temporibus tenetur laudantium quos velit a 
            aspernatur eos incidunt ipsam fuga ratione, accusamus ex.</p>
    </Modal>
  )
}

export default CalendarModal
