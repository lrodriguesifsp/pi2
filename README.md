# Projeto Integrador II - 2023/2

## Configuração do Ambiente:
- Terminal 1: cd frontend && npm install 
- Terminal 2: cd backend && npm install
- Terminal 3: cd frontend && sass --watch style.scss .\public\css\style.css  

## SQL de criação do Banco de Dados:
- É possível exportar o script SQL de criação do banco de dados pelo MySQL Workbench em: Menu > Database > Forward Engineer. Entretanto, o código gerado é para o SGBDR MySQL e não para o MariaDB, sendo assim é necessário remover a palavra chave "VISIBLE" de todos os índices e chaves estrangeiras, conforme exemplo abaixo:
-- Código gerado: INDEX `fk_cliente_usuario1_idx` (`usuario_id` ASC) VISIBLE,
-- Código ajustado: INDEX `fk_cliente_usuario1_idx` (`usuario_id` ASC),