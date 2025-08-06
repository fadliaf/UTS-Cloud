# Gunakan image Nginx resmi dan ringan
FROM nginx:alpine

# Hapus file default HTML bawaan nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin file HTML & JS
COPY index.html /usr/share/nginx/html/
COPY js /usr/share/nginx/html/js/

# Salin konfigurasi Nginx kustom
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

