-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 23, 2022 at 08:47 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vetcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `vets`
--

CREATE TABLE `vets` (
  `id` int(2) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` varchar(3) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `doctorId` varchar(20) NOT NULL,
  `specialization` varchar(255) NOT NULL,
  `room` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vets`
--

INSERT INTO `vets` (`id`, `profileImage`, `name`, `surname`, `age`, `gender`, `email`, `password`, `phoneNumber`, `doctorId`, `specialization`, `room`) VALUES
(1, 'https:', 'Jason', 'Craig', '40', 'Male', 'jasoncraig@petcare.co.za', 'password123', '0836596467', '981218102684', 'Clinical pharmacology', '321'),
(2, '', 'Sam', 'Klink', '32', 'Female', 'samklink@petcare.co.za', 'dfl124!', '0736315880', '88121800251087', 'Anesthesiology', '234'),
(3, '', 'Linda', 'Harwood', '50', 'Female', 'lindaharwood@petcare.co.za', 'chester123!', '0735945220', '8610091569824', 'Surgery', '124'),
(4, '', 'Rodney', 'Bruce', '56', 'Male', 'rodneybruce@patcare.co.za', 'kangaroo14', '0674965823', '981211492794', 'Dentistry', '222'),
(5, '', 'Rolene', 'Kemp', '47', 'Female', 'rkemp@petcare.co.za', 'fritzie26!', '0731894660', '9812146852684', 'Surgery', '133'),
(6, '', 'Daphne', 'Granger', '28', 'Female', 'dgranger@petcare.co.za', 'weasley89!', '0734289634', '9812148752691', 'Dentistry', '100'),
(7, '', 'Tom', 'Presly', '35', 'Male', 'tpresly@petcare.co.za', 'harrypotter', '0835741320', '7810589492794', 'Anesthesiology', '152'),
(8, '', 'Tanielle', 'Pettitt', '32', 'female', 'taniellep@petcare.co.za', '9ec673a7d8c5e9dbafbadf0059ffe22a', '073 637 5880', '123456', 'Dentistry', '244'),
(9, '', 'Rolene', 'Kemp', '53', 'female', 'rolene@petcare.co.za', '9575c08dcbc4144363bb87ca333d52e9', '069 564 2856', '68955453', 'Dentistry', '125'),
(10, '', 'Karl', 'Demphy', '60', 'male', 'demphy@petcare.co.za', '8c166b5deb15aea66ddbeb8b1b8df6ba', '168 028 6533', '6595465', 'Dentistry', '156');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vets`
--
ALTER TABLE `vets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vets`
--
ALTER TABLE `vets`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
