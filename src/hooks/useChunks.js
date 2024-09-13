import { useState } from 'react';

function useChunks() {
    const [cardsToShow, setCardsToShow] = useState(1);

    const updateCardsToShow = () => {
        if (window.innerWidth >= 1300) {
            setCardsToShow(3);
        } else if (window.innerWidth >= 768) {
            setCardsToShow(2);
        } else {
            setCardsToShow(1);
        }
    };
  return [cardsToShow,updateCardsToShow]
}

export default useChunks
