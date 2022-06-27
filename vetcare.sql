-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 27, 2022 at 09:27 PM
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
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(2) NOT NULL,
  `doctor` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `pet name` varchar(255) NOT NULL,
  `pet type` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `room` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(3) NOT NULL,
  `vet` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `vet`, `client`, `time`, `date`, `room`) VALUES
(2, 'Rolene Kemp', 'Tony Povey', '13:00', '2022-06-22', '150'),
(3, 'Tanielle Pettitt', 'Carlos Monti', '15:00', '2022-06-25', '125'),
(4, 'Linda Harwood', 'Sarah Hobson', '14:00', '2022-06-24', '130'),
(5, 'Dick King', 'Karl Crud', '13:00', '2022-06-24', '123'),
(6, 'Rolene Kemp', 'Karl Crud', '08:00', '2022-06-26', '120'),
(7, 'Kelly Jane', 'Sarah Hobson', '10:13', '2022-06-26', '12'),
(10, 'Clair Gweneth', 'Sarah Ackles', '15:00', '2022-06-27', '50'),
(11, 'John King', 'Chelsea Schmoop', '08:30', '2022-06-27', '40'),
(12, 'Clair Gweneth', 'Joey Motera', '15:45', '2022-06-27', '122'),
(13, 'Tate Grayson', 'Jackie Bloppen', '12:00', '2022-06-27', '12'),
(14, 'John  King   ', 'Sarah Ackles', '20:37', '2022-05-29', '1'),
(15, 'Tate Grayson', 'Karl Crud', '10:30', '2022-06-27', '15');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(2) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(16) NOT NULL,
  `clientId` varchar(20) NOT NULL,
  `medicalAidNum` varchar(20) NOT NULL,
  `petImage` varchar(255) NOT NULL,
  `petType` varchar(255) NOT NULL,
  `petName` varchar(255) NOT NULL,
  `petAge` varchar(2) NOT NULL,
  `petGender` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `profileImage`, `name`, `surname`, `email`, `phoneNumber`, `clientId`, `medicalAidNum`, `petImage`, `petType`, `petName`, `petAge`, `petGender`) VALUES
(21, 'profiles/1656101670.jpg', 'Karl', 'Crud', 'karlcrud@gmail.com', '073 444 5120', '87451220', '305121', 'profiles/16561016702.jpg', 'Maltese', 'Huggles', '8', 'female'),
(22, 'profiles/1656101774.jpg', 'Todd', 'Cobbler', 'cobbler@gmail.com', '084 568 2521', '87451220', '65452', 'profiles/16561017742.jpg', 'Cat', 'Queeny', '5', 'female'),
(23, 'profiles/1656102293.jpg', 'Brandon', 'Landry', 'landry@gmail.com', '073 698 5554', '001544895', '7845210', 'profiles/16561022932.jpg', 'Cat', 'Mr Huggles', '3', 'male'),
(24, 'profiles/1656102409.jpg', 'Joey', 'Motera', 'montera@gmail.com', '073 444 5569', '954562648', '541252', 'profiles/16561024092.jpg', 'Shepperd', 'Buddy', '2', 'male'),
(25, 'profiles/1656102521.jpg', 'Jackie', 'Bloppen', 'bloppen@gmail.com', '067 444 5879', '954654523', '125889', 'profiles/16561025212.jpg', 'Cat', 'Sweetness', '1', 'female'),
(26, 'profiles/1656103089.jpg', 'Kate', 'Stickles', 'kstickles@gmail.com', '067 8888 9687', '874152638', '102589', 'profiles/16561030892.jpg', 'Golden-doodle', 'Rue', '1', 'female'),
(27, 'profiles/1656103196.jpg', 'Sarah', 'Ackles', 'sackles@gmail.com', '067 488 5521', '9847855032', '4568203', 'profiles/16561031962.jpg', 'Labrador', 'Harry', '7', 'male'),
(28, 'profiles/1656315324.jpg', 'Chelsea', 'Schmoop', 'schmoop@gmail.com', '067 895 4144', '958412033', '4561238', 'profiles/16563153242.jpg', 'Cat', 'Zoe', '4', 'female'),
(29, 'profiles/1656321170.jpg', 'Sarah', 'Hobson', 'shobson@gmail.com', '073 641 5887', '8895642102', '3154852', 'profiles/16563211702.jpg', 'Pitbul', 'Lilly', '3', 'female');

-- --------------------------------------------------------

--
-- Table structure for table `receptionists`
--

CREATE TABLE `receptionists` (
  `id` int(2) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` varchar(2) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rank` varchar(255) NOT NULL DEFAULT 'General'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `receptionists`
--

INSERT INTO `receptionists` (`id`, `profileImage`, `name`, `surname`, `age`, `gender`, `phoneNumber`, `email`, `password`, `rank`) VALUES
(20, 'profiles/1655875419.jpg', 'Tracy', 'Clayton', '35', 'female', '035 984 5628', 'tclayton@petcare.co.za', '09feebf51f9bc7f51933b792a532ec1b', 'General'),
(21, 'profiles/1655876328.jpg', 'Clara', 'Poodle', '25', 'female', '068 489 5426', 'poodle@petcare.co.za', 'ed0df7ca4aa313526edc437bffe9f104', 'General'),
(22, 'profiles/1655878842.jpg', 'Jessica', 'Jones', '30', 'female', '068 945 7542', 'jjones@petcare.co.za', 'cf4050b8665c76a77530daa2dde1228b', 'General'),
(23, 'profiles/1655972768.jpg', 'Stacy', 'Honda', '36', 'female', '038 952 7050', 'shonda@petcare.co.za', 'f199976cadad3d6e1cd68cace804cfdf', 'General'),
(24, 'profiles/1655975923.jpg', 'Janice', 'Krugar', '33', 'female', '368 945 5589', 'krugar@petcare.co.za', '4c54f0de68f671130cf400a0ba83c462', 'Head'),
(25, 'profiles/1656360884.jpg', 'Jason', 'Craig', '29', 'male', '067 458 5090', 'jasonc@petcare.co.za', 'cef94909e2692b15d7e1bb5cfff03f99', 'General'),
(26, 'profiles/1656361228.jpg', 'Tony', 'Stark', '30', 'male', '084 561 5220', 'tonystark@petcare.co.za', '8d45806e3291c9faab3f12ad7fc4e42e', 'General');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `receptionist` varchar(255) NOT NULL,
  `taskName` varchar(255) NOT NULL,
  `taskDescription` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `receptionist`, `taskName`, `taskDescription`) VALUES
(1, 'jjones@petcare.co.za', 'Phone Ms Porter', 'Regarding invoice'),
(3, 'jjones@petcare.co.za', 'Phone Tarryn', 'Regarding invoice'),
(4, 'jdawson@petcare.co.za', 'Cancel appointment', 'For Mr Clark'),
(5, 'jjones@petcare.co.za', 'Cancel Appointment', 'For Jason K'),
(6, 'jjones@petcare.co.za', 'Email Jason Craig', 'Regarding schedual.'),
(7, '', 'Email Tanielle', 'Regarding cancellation'),
(8, 'poodle@petcare.co.za', 'Email Rolene', 'Regarding schedule change.'),
(9, 'valentine@petcare.co.za', 'Email Tanielle', 'Regarding cancellation'),
(10, 'valentine@petcare.co.za', 'Phone Tarryn', 'Regarding invoice.'),
(11, 'valentine@petcare.co.za', 'Phone Mr Povey', 'Confirm appointment.'),
(12, 'shonda@petcare.co.za', 'Phone Tanielle', 'Regarding cancellation.'),
(22, 'krugar@petcare.co.za', 'Email Tanielle', 'Regarding Schedual.'),
(23, 'krugar@petcare.co.za', 'Email Kelly', 'Regarding Salary.');

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
(13, 'profiles/1655992039.jpg', 'Johnny ', 'King    ', '58', 'male', 'jking@petcare.co.za', 'undefined', '036 452 9080', '53213', 'Dentistry', '45'),
(14, 'profiles/1656089321.jpg', 'Kelly', 'Jane', '28', 'female', 'kjane@petcare.co.za', 'ff655f1a908cf47b34653147b0d0c4b2', '068 745 9588', '789456', 'Anesthesiology', '52'),
(15, 'profiles/1656089420.jpg', 'Clair', 'Gweneth', '43', 'female', 'gweneth@petcare.co.za', 'ffbb87c3c8f856fcb191ad224466e7ed', '068 895 1050', '7894512', 'General', '12'),
(16, 'profiles/1656089490.jpg', 'Ken', 'Platt', '32', 'male', 'kenplatt@petcare.co.za', '145b5104f3de66819e1ccae02b6ecace', '073 685 9999', '12564', 'Destistry', '3'),
(17, 'profiles/1656089573.jpg', 'David', 'Penslin', '26', 'male', 'penslin@petcare.co.za', '9ec673a7d8c5e9dbafbadf0059ffe22a', '084 565 8554', '456298', 'General', '45'),
(18, 'profiles/1656089654.jpg', 'Taylor', 'Benson', '30', 'female', 'benson@gmail.com', '551455db1aaf2dbf0aa1226ca3075ad4', '073 654 2222', '364589', 'Dentistry', '78'),
(19, 'profiles/1656306268.jpg', 'Tate', 'Grayson', '27', 'male', 'grayson@petcare.co.za', '913fbedada1acf6dd13b3b7d6c68b847', '067 485 9632', '4521789', 'General', '19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receptionists`
--
ALTER TABLE `receptionists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vets`
--
ALTER TABLE `vets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `receptionists`
--
ALTER TABLE `receptionists`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `vets`
--
ALTER TABLE `vets`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
