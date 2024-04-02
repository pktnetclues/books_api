-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 02, 2024 at 06:34 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

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

DROP TABLE IF EXISTS `author`;
CREATE TABLE IF NOT EXISTS `author` (
  `author_id` smallint NOT NULL,
  `author_name` char(100) NOT NULL,
  `author_bio` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`author_id`, `author_name`, `author_bio`) VALUES
(1, 'Chitra Banerjee Divakaruni', 'Chitra Banerjee Divakaruni is an Indian-born American author, poet, and the Betty and Gene McDavid Professor of Writing at the University of Houston Creative Writing Program. Her short story collection, Arranged Marriage, won an American Book Award in 1996.'),
(2, 'Vikram Sampath', 'Vikram Sampath FRHistS is an Indian scholar and popular historian who is noted for writing biographies of Gauhar Jaan and Vinayak Damodar Savarkar. Sampath was born in Karnataka. After academic training in engineering, mathematics, and finance, he worked in banking.'),
(3, 'Meenakshi Jain', 'Meenakshi Jain is an Indian political scientist and historian who served as an associate professor of history at Gargi College, Delhi. In 2014, she was nominated as a member of the Indian Council of Historical Research by the Government of India.'),
(4, 'J. Sai Deepak', 'J. Sai Deepak is an Indian Supreme Court lawyer, author, and public speaker. As a counsel, he practices primarily before the Supreme Court of India, the High Court of Delhi, the NCLAT, the NCLT and the CCI.'),
(5, 'Tulsidas', 'Rambola Dubey, known as Tulsidas, was a Vaishnava Hindu saint and poet, renowned for his devotion to the deity Rama.');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `book_id` smallint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `published_year` smallint NOT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=MyISAM AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `title`, `description`, `published_year`) VALUES
(2, 'Bravehearts of Bharat: Vignettes from Indian History', 'Fifteen Brave Men and Women of Bharat who Never Succumbed to the Challenges of Invaders But were Lost and Forgotten in the Annals of History. These are the stories of those Bravehearts who Fought to Protect their Rights, Faith and Freedom.History has always been the handmaiden of the victor.', 2022),
(11, 'Sri Ramcharitmanas', 'Ramcharitmanas, is an epic poem in the Awadhi language, composed by the 16th-century Indian bhakti poet Tulsidas. It has many inspirations, the primary being the Ramayana of Valmiki. This work is also called, in popular parlance, Tulsi Ramayana, Tulsikrit Ramayana, Tulsidas Ramayana or simply Manas.', 1576);

-- --------------------------------------------------------

--
-- Table structure for table `book_authors`
--

DROP TABLE IF EXISTS `book_authors`;
CREATE TABLE IF NOT EXISTS `book_authors` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `book_id` smallint NOT NULL,
  `author_id` smallint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `book_authors`
--

INSERT INTO `book_authors` (`id`, `book_id`, `author_id`) VALUES
(1, 2, 2),
(5, 2, 2),
(17, 11, 5);

-- --------------------------------------------------------

--
-- Table structure for table `book_genres`
--

DROP TABLE IF EXISTS `book_genres`;
CREATE TABLE IF NOT EXISTS `book_genres` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `book_id` smallint NOT NULL,
  `genre_id` smallint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `book_genres`
--

INSERT INTO `book_genres` (`id`, `book_id`, `genre_id`) VALUES
(1, 2, 6),
(5, 2, 6),
(16, 11, 11);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
CREATE TABLE IF NOT EXISTS `genre` (
  `genre_id` tinyint NOT NULL AUTO_INCREMENT,
  `genre_name` char(200) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
