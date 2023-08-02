-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 02 2023 г., 09:37
-- Версия сервера: 5.7.42-0ubuntu0.18.04.1
-- Версия PHP: 7.2.24-0ubuntu0.18.04.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `claimchecker`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `card` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `address` text,
  `ein` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`ID`, `fullName`, `phone`, `email`, `card`, `type`, `company`, `address`, `ein`) VALUES
(1, 'TEST TEST', '(251) 994-444444', 'knsjkdn@purpleadlab.com', 'YES', 'PurpleAdLab', 'PurpleAdLab', 'Downtown', '00909090909'),
(2, 'TEST TEST', '(251) 994-444444', 'maxl@purpleadlab.com', 'YES', 'PurpleAdLab', 'PurpleAdLab', 'Downtown', '46464646464'),
(3, 'TEST TEST', '(251) 994-444444', 'kjsdhfsjkdhfskjdhf@purpleadlab.com', 'YES', 'PurpleAdLab', 'PurpleAdLab', 'Downtown', '879879897879'),
(4, 'lkjk', '(435) 435-4445', 'gfgfd@gmail.com', 'YES', 'k', 'dfgdfg', 'erter', '3435435'),
(5, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'PurpleAdLab', 'Downtown', '322334'),
(6, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(7, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(8, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(9, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(10, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(11, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '87687687687687'),
(12, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(13, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(14, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(15, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '87687687687687'),
(16, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(17, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '87687687687687'),
(18, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(19, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(20, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(21, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(22, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(23, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '87687687687687'),
(24, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(25, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(26, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(27, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(28, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(29, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(30, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(31, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(32, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(33, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(34, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(35, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(36, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(37, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(38, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(39, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(40, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(41, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(42, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '46464646464'),
(43, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909'),
(44, 'Max Globa', '(183) 106-705652', 'onyx18121990@gmail.com', 'YES', 'Wells Fargo ATM', 'Wells Fargo ATM', '5899 Green Valley Cir', '00909090909');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
