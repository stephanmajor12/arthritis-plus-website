DROP TABLE IF EXISTS Patient;
CREATE TABLE Patient (
	Demographic_id	INTEGER AUTO_INCREMENT,
	Name	TEXT,
	Email	TEXT,
	Gender	TEXT,
	Age	INTEGER,
	Height	TEXT,
	Weight TEXT,
	Prev_medical_history	TEXT,
	Prev_surgical_id	INTEGER,
	Lifestyle_history	TEXT,
	Alchohol_consumtion	TEXT,
	drinks_per_week	INTEGER,
	diagnosis	NUMERIC,
	year_of_diagnosis	INTEGER,
	current_medicines	TEXT,
	prior_medicines	TEXT,
	PRIMARY KEY(Demographic_id)
);

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
	id INTEGER AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS pdf_files;
CREATE TABLE pdf_files (
  id int(11) NOT NULL,
  patient_id int(11) NOT NULL,
  form_name varchar(128) NOT NULL,
  file_data longblob NOT NULL,
  patient_name varchar(255) DEFAULT NULL,
  date_uploaded date NOT NULL
)