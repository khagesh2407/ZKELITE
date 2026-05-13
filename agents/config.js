// Configuration for Zorabliss Backend
const CONFIG = {
  // Business Details
  business: {
    name: 'Zorabliss',
    email: 'support@zkelite.store',
    whatsapp: '+918224021324',
    phone: '8224021324',
    address: 'ZK Elite Pvt Ltd, Bhopal, Madhya Pradesh, India'
  },

  // Payment Methods
  payment: {
    methods: ['upi', 'cod'],
    upi: {
      enabled: true,
      upiId: '7000421094@upi', // LIVE UPI ID
      qrCode: '/assets/upi-qr.png'
    },
    cod: {
      enabled: true,
      chargePercentage: 0,
      minAmount: 0
    }
  },

  // Email Configuration (FormSubmit.co - Free service)
  email: {
    service: 'formsubmit.co',
    supportEmail: 'support@zkelite.store',
    notificationEmail: 'support@zkelite.store',
    submitEndpoint: 'https://formsubmit.co/support@zkelite.store'
  },

  // Products - 7 Items
  products: [
    {
      id: 1,
      name: 'Premium Makhana - Plain Classic',
      price: 299,
      category: 'makhana',
      image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=400'
    },
    {
      id: 2,
      name: 'Premium Makhana - Himalayan Pink Salt',
      price: 349,
      category: 'makhana',
      image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=400'
    },
    {
      id: 3,
      name: 'Premium Makhana - Peri-Peri Masala',
      price: 349,
      category: 'makhana',
      image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=400'
    },
    {
      id: 4,
      name: 'Alkaline Drinking Water - 1L',
      price: 99,
      category: 'water',
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=400'
    },
    {
      id: 5,
      name: 'Aloe Vera Gel - 100ml',
      price: 199,
      category: 'skincare',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400'
    },
    {
      id: 6,
      name: 'Pure Rose Water - 200ml',
      price: 249,
      category: 'skincare',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400'
    },
    {
      id: 7,
      name: 'Multani Mitti Mask - 100g',
      price: 149,
      category: 'skincare',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400'
    }
  ],

  // WhatsApp Business Integration
  whatsapp: {
    businessNumber: '918224021324',
    businessName: 'Zorabliss',
    businessCategory: 'HEALTH_WELLNESS',
    deepLink: 'https://wa.me/918224021324',
    preFilledMessage: 'Hello! I would like to know more about Zorabliss products.'
  },

  // Domain Configuration
  domain: {
    primary: 'zkelite.store',
    hosted: 'khagesh2407.github.io/ZKELITE/agents/',
    dnsStatus: 'CONFIGURED',
    sslStatus: 'ACTIVE'
  },

  // Delivery Configuration
  delivery: {
    charge: 50,
    freeAbove: 500,
    areas: ['All India'],
    estimatedDays: '3-5 business days'
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
