USE proxy_ch_db;

CREATE TABLE
    people(
        id int not null auto_increment, 
        name varchar(255), 
        primary key(id)
    );