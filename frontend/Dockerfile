# Gunakan image Nginx resmi yang ringan
FROM nginx:alpine

# Hapus default index nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin semua file frontend ke direktori html Nginx
COPY . /usr/share/nginx/html

# Expose port 80 (opsional, hanya untuk dokumentasi)
EXPOSE 80

