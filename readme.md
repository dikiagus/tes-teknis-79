Take HomeTestIT Infra

# Membuat Dockerfile :

// Gunakan image Node.js versi 16 sebagai base image

FROM node:16
<br><br><br>
// Tentukan direktori kerja di dalam container

WORKDIR /app
<br><br><br>
// Salin package.json dan package-lock.json ke direktori kerja

COPY package*.json ./
<br><br><br>
// Instal dependensi

RUN npm install
<br><br><br>
// Salin semua file ke dalam direktori kerja

COPY . .
<br><br><br>
// Instal nodemon secara global untuk hot-reloading

RUN npm install -g nodemon
<br><br><br>
// Expose port aplikasi

EXPOSE 3001
<br><br><br>
// Jalankan perintah untuk memulai aplikasi

CMD ["nodemon", "src/index.ts"]
<br><br><br>
![image](https://github.com/user-attachments/assets/71b34a4f-5297-4123-ad6c-11e9ec230e5f)
