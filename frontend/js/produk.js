const API_URL = 'http://10.0.2.226:3000/api/produk';
const S3_URL = 'https://d3w005njh8d8fk.cloudfront.net/';

// Show loading state
const container = document.getElementById('produk-container');
container.innerHTML = `
  <div class="col-span-full flex justify-center items-center py-12">
    <div class="animate-pulse flex flex-col items-center gap-4">
      <div class="h-12 w-12 bg-green-200 rounded-full"></div>
      <div class="h-4 bg-green-200 rounded w-32"></div>
    </div>
  </div>
`;

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12">
          <div class="inline-block p-4 bg-yellow-50 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-700">Tidak ada produk tersedia</h3>
          <p class="text-gray-500 mt-2">Silakan cek kembali nanti</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group';
      card.innerHTML = `
        <div class="relative">
          <img class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
               src="${S3_URL + item.image}" 
               alt="${item.name}"
               loading="lazy">
          <div class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            ${item.stock > 0 ? 'Stok Tersedia' : 'Habis'}
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">${item.name}</h3>
          <div class="flex justify-between items-center mt-4">
            <p class="text-green-600 font-bold text-lg">Rp${item.price.toLocaleString('id-ID')}</p>
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Beli
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <div class="inline-block p-4 bg-red-50 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-700">Gagal memuat produk</h3>
        <p class="text-gray-500 mt-2">Silakan refresh halaman atau coba lagi nanti</p>
        <button onclick="window.location.reload()" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          Coba Lagi
        </button>
      </div>
    `;
  });