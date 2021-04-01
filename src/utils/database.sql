
DROP TABLE categories;


CREATE TABLE categories (
	id uuid NOT NULL,
  	name varchar NOT NULL,
  	parent_id uuid DEFAULT NULL,
  	mpath varchar NOT NULL DEFAULT '',
  	CONSTRAINT pk_categories PRIMARY KEY (id)
)


ALTER TABLE categories ADD CONSTRAINT fk_categories
FOREIGN KEY (parent_id)
REFERENCES categories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;


-- agrotóxicos

INSERT INTO categories (id,  name, parent_id) VALUES (
	'01021296-d06f-4824-8d33-73a77bce5527',  'Agrotóxicos', null
)

INSERT INTO categories (id,  name, parent_id) VALUES (
	'4d3882c2-d291-45c0-857b-67e8f8eb1264', 'Herbicida', '01021296-d06f-4824-8d33-73a77bce5527'
)

INSERT INTO categories (id,  name, parent_id) VALUES (
	'057506f8-9533-48ff-9096-f77505357b9f', 'Fungicida', '01021296-d06f-4824-8d33-73a77bce5527'
)

-- fertilizantes

INSERT INTO categories (id,  name, parent_id) VALUES (
	'b43efabc-0d9b-41c5-8e54-1ae73a150b85',  'Fertilizantes', null
)

INSERT INTO categories (id,  name, parent_id) VALUES (
	'804f3556-b534-4256-a30e-d8ae3569c0e6', 'Químico', 'b43efabc-0d9b-41c5-8e54-1ae73a150b85'
)
