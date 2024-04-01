-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 31, 2024 at 05:18 PM
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
-- Database: `gaana`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `author_id` smallint(6) NOT NULL,
  `auther_name` char(100) NOT NULL,
  `auther_bio` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`author_id`, `auther_name`, `auther_bio`) VALUES
(1, 'Chitra Banerjee Divakaruni', 'Chitra Banerjee Divakaruni is an Indian-born American author, poet, and the Betty and Gene McDavid Professor of Writing at the University of Houston Creative Writing Program. Her short story collection, Arranged Marriage, won an American Book Award in 1996.'),
(2, 'Vikram Sampath', 'Vikram Sampath FRHistS is an Indian scholar and popular historian who is noted for writing biographies of Gauhar Jaan and Vinayak Damodar Savarkar. Sampath was born in Karnataka. After academic training in engineering, mathematics, and finance, he worked in banking.'),
(3, 'Meenakshi Jain', 'Meenakshi Jain is an Indian political scientist and historian who served as an associate professor of history at Gargi College, Delhi. In 2014, she was nominated as a member of the Indian Council of Historical Research by the Government of India.'),
(4, 'J. Sai Deepak', 'J. Sai Deepak is an Indian Supreme Court lawyer, author, and public speaker. As a counsel, he practices primarily before the Supreme Court of India, the High Court of Delhi, the NCLAT, the NCLT and the CCI.');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` tinyint(4) NOT NULL,
  `title` char(200) NOT NULL,
  `description` varchar(500) NOT NULL,
  `published_year` smallint(4) NOT NULL,
  `genre_id` tinyint(4) NOT NULL,
  `author_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `title`, `description`, `published_year`, `genre_id`, `author_id`) VALUES
(1, 'The God of Small Things', 'A novel set in Kerala, India, following the lives of fraternal twins Rahel and Estha.', 1997, 11, 101),
(2, 'Midnight\'s Children', 'An epic novel that follows the life of Saleem Sinai, born on the stroke of midnight at the exact moment of India\'s independence.', 1981, 11, 102),
(3, 'The White Tiger', 'A darkly humorous novel that explores the inequalities and injustices of Indian society through the eyes of a chauffeur.', 2008, 11, 103),
(4, 'Train to Pakistan', 'A historical novel set in the partition of India, focusing on the events in a small village.', 1956, 11, 104),
(5, 'Interpreter of Maladies', 'A collection of short stories that explore the lives of Indian Americans and Indians living in India.', 1999, 11, 105),
(6, 'The Namesake', 'A novel that follows the life of Gogol Ganguli, the son of Indian immigrants in America.', 2003, 11, 106),
(7, 'The Guide', 'A novel about a tour guide named Raju who rises from a tour guide to a spiritual leader.', 1958, 11, 107),
(8, 'A Suitable Boy', 'A sprawling novel set in post-independence India, following the lives of four families.', 1993, 11, 108),
(9, 'The Shadow Lines', 'A novel that explores the interconnectedness of events across time and space, set in India and Bangladesh.', 1988, 11, 109),
(10, 'English, August', 'A novel that follows the life of Agastya Sen, an Indian civil servant posted in a small town.', 1988, 11, 110),
(11, 'Sacred Games', 'A crime novel set in Mumbai, following the lives of a police officer and a gangster.', 2006, 11, 111),
(12, 'Maximum City: Bombay Lost and Found', 'A non-fiction book that explores the various facets of life in Mumbai.', 2004, 11, 112),
(13, 'Shantaram', 'A novel loosely based on the life of the author, Gregory David Roberts, who escaped from an Australian prison and lived in Mumbai.', 2003, 11, 113),
(15, 'The Palace of Illusions', 'A retelling of the Indian epic Mahabharata from the perspective of Draupadi.', 2008, 6, 1);

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
(8, 'Adventure'),
(10, 'Biography'),
(2, 'Fantasy'),
(6, 'Historical Fiction'),
(7, 'Horror'),
(3, 'Mystery'),
(9, 'Non-Fiction'),
(5, 'Romance'),
(1, 'Science Fiction'),
(4, 'Thriller');

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
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genre_name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
