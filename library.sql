-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 01, 2024 at 06:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `author_id` smallint(6) NOT NULL,
  `author_name` char(100) NOT NULL,
  `auther_bio` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`author_id`, `author_name`, `auther_bio`) VALUES
(1, 'Chitra Banerjee Divakaruni', 'Chitra Banerjee Divakaruni is an Indian-born American author, poet, and the Betty and Gene McDavid Professor of Writing at the University of Houston Creative Writing Program. Her short story collection, Arranged Marriage, won an American Book Award in 1996.'),
(2, 'Vikram Sampath', 'Vikram Sampath FRHistS is an Indian scholar and popular historian who is noted for writing biographies of Gauhar Jaan and Vinayak Damodar Savarkar. Sampath was born in Karnataka. After academic training in engineering, mathematics, and finance, he worked in banking.'),
(3, 'Meenakshi Jain', 'Meenakshi Jain is an Indian political scientist and historian who served as an associate professor of history at Gargi College, Delhi. In 2014, she was nominated as a member of the Indian Council of Historical Research by the Government of India.'),
(4, 'J. Sai Deepak', 'J. Sai Deepak is an Indian Supreme Court lawyer, author, and public speaker. As a counsel, he practices primarily before the Supreme Court of India, the High Court of Delhi, the NCLAT, the NCLT and the CCI.');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` smallint(5) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `published_year` smallint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `title`, `description`, `published_year`) VALUES
(1, 'Bravehearts of Bharat: Vignettes from Indian History', 'Fifteen Brave Men and Women of Bharat who Never Succumbed to the Challenges of Invaders But were Lost and Forgotten in the Annals of History. These are the stories of those Bravehearts who Fought to Protect their Rights, Faith and Freedom.History has always been the handmaiden of the victor.', 2022),
(2, 'Bravehearts of Bharat: Vignettes from Indian History', 'Fifteen Brave Men and Women of Bharat who Never Succumbed to the Challenges of Invaders But were Lost and Forgotten in the Annals of History. These are the stories of those Bravehearts who Fought to Protect their Rights, Faith and Freedom.History has always been the handmaiden of the victor.', 2022),
(3, 'Bravehearts of Bharat: Vignettes from Indian History', 'Fifteen Brave Men and Women of Bharat who Never Succumbed to the Challenges of Invaders But were Lost and Forgotten in the Annals of History. These are the stories of those Bravehearts who Fought to Protect their Rights, Faith and Freedom.History has always been the handmaiden of the victor.', 2022),
(10, 'pk', 'pk', 2004),
(18, 'pk', 'pk', 2003),
(20, 'Pankaj', 'Kumar', 2003),
(23, 'pk', 'pk', 2005),
(32, 'PK', 'PK', 2002),
(33, 'pk', 'pk', 2005),
(50, 'Pankaj Kumar', 'jkasdhih', 2006),
(58, 'Pankaj', 'Kumar', 2008),
(92, 'pk', 'pk', 2066),
(128, 'pk', 'pk', 2004);

-- --------------------------------------------------------

--
-- Table structure for table `book_authors`
--

CREATE TABLE `book_authors` (
  `id` smallint(5) NOT NULL,
  `book_id` smallint(5) NOT NULL,
  `author_id` smallint(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_authors`
--

INSERT INTO `book_authors` (`id`, `book_id`, `author_id`) VALUES
(1, 2, 2),
(5, 2, 2),
(6, 3, 2),
(7, 32, 2),
(8, 18, 2),
(9, 20, 2),
(10, 33, 2),
(11, 128, 2),
(12, 10, 2),
(13, 23, 2),
(14, 50, 2),
(15, 58, 2),
(16, 92, 2);

-- --------------------------------------------------------

--
-- Table structure for table `book_genres`
--

CREATE TABLE `book_genres` (
  `id` smallint(5) NOT NULL,
  `book_id` smallint(5) NOT NULL,
  `genre_id` smallint(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_genres`
--

INSERT INTO `book_genres` (`id`, `book_id`, `genre_id`) VALUES
(1, 2, 6),
(5, 2, 6),
(6, 32, 7),
(7, 18, 7),
(8, 20, 7),
(9, 33, 7),
(10, 128, 7),
(11, 10, 7),
(12, 23, 7),
(13, 50, 7),
(14, 58, 7),
(15, 92, 7);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `genre_id` tinyint(4) NOT NULL,
  `genre_name` char(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`genre_id`, `genre_name`) VALUES
(1, 'Science Fiction'),
(2, 'Fantasy'),
(3, 'Mystery'),
(4, 'Thriller'),
(5, 'Romance'),
(6, 'Historical'),
(7, 'Horror'),
(8, 'Adventure'),
(9, 'Non-Fiction'),
(10, 'Biography'),
(11, 'History');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `book_authors`
--
ALTER TABLE `book_authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_genres`
--
ALTER TABLE `book_genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `book_authors`
--
ALTER TABLE `book_authors`
  MODIFY `id` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `book_genres`
--
ALTER TABLE `book_genres`
  MODIFY `id` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `genre_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
