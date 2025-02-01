# Gunakan image Node.js versi 16 sebagai base image
FROM node:16

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin semua file ke dalam direktori kerja
COPY . .

# Instal nodemon secara global untuk hot-reloading
RUN npm install -g nodemon

# Expose port aplikasi
EXPOSE 3001

# Jalankan perintah untuk memulai aplikasi
CMD ["nodemon", "src/index.ts"]
