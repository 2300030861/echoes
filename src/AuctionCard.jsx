import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    id: 1,
    title: 'The Kiss',
    image: '/kiss.jpg',
    price: 200,
    currentBid: 290.01,
    bids: 3,
    minQty: 10,
    maxQty: 100,
    openBid: 200,
    nextMinBid: 300,
    endsIn: '2 days',
  },
  {
    id: 2,
    title: 'The Last Supper',
    image: '/ls.jpg',
    price: 180,
    currentBid: 240.5,
    bids: 5,
    minQty: 5,
    maxQty: 80,
    openBid: 180,
    nextMinBid: 250,
    endsIn: '10 days',
  },
  {
    id: 3,
    title: 'Starry Night',
    image: '/sn.jpg',
    price: 210,
    currentBid: 265.75,
    bids: 4,
    minQty: 8,
    maxQty: 90,
    openBid: 210,
    nextMinBid: 275,
    endsIn: '10 hours',
  },
  {
    id: 4,
    title: 'Water Lilies',
    image: '/wl.jpg',
    price: 230,
    currentBid: 310.2,
    bids: 6,
    minQty: 12,
    maxQty: 110,
    openBid: 230,
    nextMinBid: 320,
    endsIn: '2 days',
  },
];

export default function AuctionCard() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container py-4 bg-light min-vh-100">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4" key={product.id}>
            <div className="card h-100 shadow">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                onClick={() => setSelectedImage(product.image)}
                style={{ cursor: 'pointer', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                <hr />
                <p><strong>Ends In:</strong> {product.endsIn}</p>
                <p><strong>Current Bid:</strong> ${product.currentBid.toFixed(2)} ({product.bids} Bids)</p>
                <p><strong>Qty:</strong> Min {product.minQty} / Max {product.maxQty}</p>
                <p><strong>Open Bid:</strong> ${product.openBid.toFixed(2)}</p>
                <p><strong>Next Min Bid:</strong> ${product.nextMinBid.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="modal d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <img src={selectedImage} alt="Zoomed" className="w-100 rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
