FROM nginx:stable

# set up HTTP basic auth with password in SECRET.txt
RUN mkdir /app && apt update -y && apt install -y apache2-utils
COPY SECRET.txt /app
#RUN sh -c 'echo -n "$(cat /app/SECRET.txt)" | htpasswd -i -c /app/.htpasswd user' && rm /app/SECRET.txt
RUN sh -c 'cat /app/SECRET.txt | htpasswd -i -c /app/.htpasswd user' && rm /app/SECRET.txt

COPY nginx_proxy.conf /etc/nginx/nginx.conf

EXPOSE 80

# implicitly runs nginx
