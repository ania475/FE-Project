CREATE TABLE IF NOT EXISTS facts_data (
    user_id INT NOT NULL,
    username varchar(250) NOT NULL,
    fact varchar(250) NOT NULL,
    PRIMARY_KEY (user_id)

);