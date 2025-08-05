# Gunakan image Node.js resmi
FROM node:18

# Direktori kerja di dalam container
WORKDIR /app

# Salin file konfigurasi package.json
COPY package*.json ./

# Install dependensi 
RUN npm install

# Salin seluruh kode ke container
COPY . .

# Ekspose port backend (misal port 3000)
EXPOSE 3000

# Jalankan aplikasi
CMD [ "node", "app.js" ]
