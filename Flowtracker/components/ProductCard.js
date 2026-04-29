import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem', background: '#1e293b', transition: 'transform 0.3s' }}>
      <div style={{ height: '180px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: '8px', marginBottom: '1rem' }}></div>
      <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>{product?.name || 'Trackflow Service'}</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Comprehensive financial tracking for professionals.</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
        <span style={{ color: '#fff', fontWeight: 'bold' }}>$99.00</span>
        <button style={{ padding: '0.6rem 1.2rem', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
