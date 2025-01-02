-- DROP DATABASE IF EXISTS agenda_db;
-- CREATE DATABASE IF NOT EXISTS agenda_db;
USE agenda_db;

SELECT "deu certo";

CREATE TABLE
    clientes (
        id_cliente INT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(100),
        CONSTRAINT  PRIMARY KEY (id_cliente)
    );

CREATE TABLE
    compromissos (
        id_compromisso INT NOT NULL AUTO_INCREMENT,
        id_cliente INT NOT NULL,
        _data VARCHAR(100) NOT NULL,
        descricao VARCHAR(200),
        CONSTRAINT  PRIMARY KEY (id_compromisso),
        FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
    );

INSERT INTO
    clientes (nome)
VALUES
    ("kassio"),
    ("polly"),
    ("stevann"),
    ("teodoro"),
    ("vladimir");
INSERT INTO 
    compromissos (id_cliente, _data, descricao)
VALUES
    (1, "meio dia", "ACORDA VAGA");