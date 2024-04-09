-- drop database steakhouse;

CREATE database steakhouse;

use steakhouse;

create table status (
	id int not null auto_increment,
	status varchar(45) not null,
	primary key (id)
);

create table clientes (
		id int not null auto_increment,
		nome varchar(200) NOT NULL,
		endereco varchar(200) NOT NULL,
		telefone int NOT NULL,
		email varchar(100) NOT NULL ,
		cpf int not null unique,
		pedidos_id int NOT NULL,
		password varchar(45) NOT NULL,
		PRIMARY KEY (id)
);

create table pedidos (
	id int not null auto_increment,
	total int not null,
	status_id int not null,
	clientes_id int not null,
	primary key (id),
	constraint fk_pedidos_status
			foreign key (status_id)
			references status (id),
	constraint fk_pedidos_clientes
			foreign key (clientes_id)
			references clientes (id)
);

create table produtos (
	id int not null auto_increment,
	nome varchar(500) not null,
	preco int not null,
	ingredientes varchar(450),
	primary key(id)
);
create table produtos_pedidos (
	produtos_id int not null,
	pedidos_id int not null,
	primary key(produtos_id,pedidos_id),
	constraint fk_produtos_pedidos_pedidos
			foreign key (pedidos_id)
			references pedidos (id),
	constraint fk_produtos_pedidos_produtos
			foreign key (produtos_id)
			references produtos (id)
);


