import React, { useEffect, useState } from 'react';

type BookingRequest = {
  status: string;
  documents: string[];
};

type Artist = {
  documents: string[];
};

type DocumentHandlerProps = {
  bookingRequests: BookingRequest[];
  artist: Artist;
};

const DocumentHandler: React.FC<DocumentHandlerProps> = ({ bookingRequests, artist }) => {
  const [sharedDocuments, setSharedDocuments] = useState<string[]>([]);

  const setDocuments = (request: BookingRequest | null) => {
    if (request && request.status === 'booked') {
      setSharedDocuments(artist.documents);
    } else if (request) {
      setSharedDocuments(request.documents);
    }
  };

  useEffect(() => {
    if (bookingRequests.length > 0) {
      setDocuments(bookingRequests[0]);
    }
  }, [bookingRequests]);

  return (
    <div>
      {bookingRequests.map((request, index) => (
        <button key={index} onClick={() => setDocuments(request)}>
          Share Documents
        </button>
      ))}
    </div>
  );
};

export default DocumentHandler;