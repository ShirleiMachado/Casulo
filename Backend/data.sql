CREATE table USERS (
id varchar(255) PRIMARY KEY,
name varchar (255) NOT NULL,
email varchar(50) unique,
password VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
job VARCHAR(50) NOT NULL,
gender ENUM('Mulher Cis', 'Homem Cis', 'Mulher Trans', 'Homem Trans', 'Não binário', 'Prefiro não responder'),
question enum ('Preto', 'Pardo', 'Amarelo', 'Indigena', 'Branco'),
description varchar(255) NOT NULL,
foto longblob NOT NULL,
role ENUM('Mentor', 'Mentorado')
);

SELECT * FROM USERS;
SELECT * FROM Mentories;

create table Mentories (
id varchar(255) primary key,
name varchar(255) NOT NULL,
theme varchar(255) NOT NULL,
description varchar(255),
idUser varchar(255) NOT NULL,
foreign key(idUser) references USERS (id),
idMentor varchar(255) NOT NULL,
foreign key(idMentor) references USERS (id),
isApproved boolean)
