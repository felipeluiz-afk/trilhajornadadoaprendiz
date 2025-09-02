// ===== SERVICE WORKER - JOVEM APRENDIZ GERAR =====

const CACHE_NAME = 'gerar-formacoes-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  console.log('🔧 Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('📦 Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('✅ Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('❌ Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  console.log('🚀 Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('✅ Service Worker: Activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip external requests (course links)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version if available
        if (response) {
          console.log('📦 Service Worker: Serving from cache', event.request.url);
          return response;
        }
        
        // Otherwise fetch from network
        console.log('🌐 Service Worker: Fetching from network', event.request.url);
        return fetch(event.request).then(function(response) {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Add to cache
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(function(error) {
        console.error('❌ Service Worker: Fetch failed', error);
        
        // Return offline page if available
        if (event.request.destination === 'document') {
          return caches.match('/offline.html');
        }
      })
  );
});

// Background sync for analytics (if supported)
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync-analytics') {
    console.log('📊 Service Worker: Background sync for analytics');
    event.waitUntil(syncAnalytics());
  }
});

// Push notifications (future feature)
self.addEventListener('push', function(event) {
  console.log('🔔 Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nova formação disponível!',
    icon: '/assets/icon-192x192.png',
    badge: '/assets/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explorar',
        icon: '/assets/action-explore.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/assets/action-close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('GERAR Formações', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  console.log('🔔 Service Worker: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/#trilhas')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions
async function syncAnalytics() {
  try {
    // Get stored analytics data
    const analyticsData = await getStoredAnalytics();
    
    if (analyticsData.length > 0) {
      // Send to analytics service
      await sendAnalyticsData(analyticsData);
      
      // Clear stored data after successful sync
      await clearStoredAnalytics();
      
      console.log('✅ Service Worker: Analytics synced successfully');
    }
  } catch (error) {
    console.error('❌ Service Worker: Analytics sync failed', error);
  }
}

async function getStoredAnalytics() {
  // This would integrate with IndexedDB or localStorage
  return [];
}

async function sendAnalyticsData(data) {
  // This would send data to your analytics endpoint
  return fetch('/api/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

async function clearStoredAnalytics() {
  // Clear the stored analytics data
  return true;
}

// Error handling
self.addEventListener('error', function(event) {
  console.error('❌ Service Worker: Error occurred', event.error);
});

self.addEventListener('unhandledrejection', function(event) {
  console.error('❌ Service Worker: Unhandled promise rejection', event.reason);
});

// Update notification
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('🔄 Service Worker: Skipping waiting...');
    self.skipWaiting();
  }
});

console.log('🎯 Service Worker: Loaded successfully');

