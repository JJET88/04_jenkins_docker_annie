CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  detail TEXT NOT NULL,
  coverimage VARCHAR(1000)
 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO movies (id, name, detail, coverimage) VALUES
(1, 'Inception',
 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
 
),
(2, 'The Matrix',
 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg'
 
),
(3, 'Parasite',
 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
 'https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
 
),
(4, 'Interstellar',
 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.',
 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'

),
(5, 'Joker',
 'A mentally troubled comedian embarks on a downward spiral that leads to him becoming the infamous criminal mastermind.',
 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg'

),
(6, 'Avengers: Endgame',
 'The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe.',
 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg'

),
(7, 'Titanic',
 'A romance blossoms aboard the ill-fated RMS Titanic between a wealthy young woman and a poor artist.',
 'https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'

);



