const API_URL = '/api/produk'; // Ganti IP sesuai EC2 backend kamu
const S3_URL = 'https://d3w005njh8d8fk.cloudfront.net/';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('produk-container');
    container.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow-md rounded-lg overflow-hidden';

      card.innerHTML = `
        <img class="w-full h-48 object-cover" src="${S3_URL + item.image}" alt="${item.name}">
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">${item.name}</h3>
          <p class="text-green-600 font-bold">Rp${item.price.toLocaleString('id-ID')}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error(error);
    document.getElementById('produk-container').innerText = '⚠️ Gagal memuat data produk.';
  });
