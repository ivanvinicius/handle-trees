-- run the commands below to create database and table

CREATE DATABASE teste;

CREATE TABLE categories (
	id uuid NOT NULL,
  	parent_id uuid DEFAULT null,
  	name varchar NOT NULL,
  	CONSTRAINT pk_categories PRIMARY KEY (id)
)

ALTER TABLE categories ADD CONSTRAINT fk_categories
FOREIGN KEY (parent_id)
REFERENCES categories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

INSERT INTO categories (id,  name) VALUES (
	'01021296-d06f-4824-8d33-73a77bce5527',  'Agrotóxicos'
)

INSERT INTO categories (id, parent_id, name) VALUES (
	'4d3882c2-d291-45c0-857b-67e8f8eb1264', '01021296-d06f-4824-8d33-73a77bce5527', 'Herbicida'
)
