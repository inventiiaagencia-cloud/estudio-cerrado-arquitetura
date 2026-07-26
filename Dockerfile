# Estágio de construção
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de pacotes para aproveitar o cache do Docker
COPY package*.json ./

# Instala as dependências
RUN npm install --legacy-peer-deps

# Copia o restante do código da aplicação
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Estágio de execução (servindo com Nginx)
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o build da aplicação do estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia nossa configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para o Easypanel
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]