TABLE

CREATE TABLE `user` (
  `id` int(22) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `p_photo` varchar(200) NOT NULL,
  `timestamp` int(255) NOT NULL,
  `online` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

CREATE TABLE `conversation` (
  `id` int(22) NOT NULL AUTO_INCREMENT,
  `from_id` varchar(200) NOT NULL,
  `to_id` varchar(200) NOT NULL,
  `timestamp` varchar(200) NOT NULL,
  `con_id` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE `conversation_reply` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `reply` text NOT NULL,
  `from_id` int(11) NOT NULL,
  `to_id` int(11) NOT NULL,
  `timestamp` varchar(500) NOT NULL,
  `con_id` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
