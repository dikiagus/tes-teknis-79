# Take HomeTestIT Infra
<br><br>
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
# Build :
- Masuk ke cmd, dan pindahkan ke direktori tujuan

- Menggunakan perintah : docker build -t (username/repositorydocker)

![image](https://github.com/user-attachments/assets/71b34a4f-5297-4123-ad6c-11e9ec230e5f)

# Push :
- Masuk ke cmd, dan pindahkan ke direktori tujuan

- Menggunakan perintah : docker push (username/repositorydocker)

![image](https://github.com/user-attachments/assets/ad94475f-562e-4f85-8d41-12a375c797ab)

# Run :
- cara running docker image yang sudah dibuat dengan menggunakan perintah : docker run -p (port yang digunakan) (username_docker)/(repository_docker)
  
![image](https://github.com/user-attachments/assets/7be9baa1-73d5-4ce8-bfb6-2fdf100e9260)

# API POST :
- Menggunakan Postman
- Pilih Metode Post
- Masukkan url : http://localhost:3001/employees
- Pada Body pilih raw lalu json dan masukkan data seperti nama, email, position, department, salary

  ![image](https://github.com/user-attachments/assets/df37da2a-fd76-4595-86da-96812ca9536e)

# Tabel pada mongoDB:

![image](https://github.com/user-attachments/assets/41ce0c13-4cae-4ee1-b776-6feae833a1e1)


