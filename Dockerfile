FROM nginx:stable
#WORKDIR /app

COPY nginx_frontend.conf /etc/nginx/nginx.conf
COPY dist/colorizer/browser /usr/share/nginx/html

EXPOSE 80

# implicitly runs nginx
