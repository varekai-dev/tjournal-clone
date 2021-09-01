import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Posts.module.scss';

export const Posts: React.FC = () => {
	return (
		<Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
			<Typography variant="h5" className={styles.title}>
				Пользователь «Хабра» нашёл в кнопочных телефонах вредоносные функции для перехвата SMS и тайной отправки данных в сеть
			</Typography>
			<Typography className="mt-10 mb-15">Трояны и бэкдоры позволяют злоумышленникам списывать деньги со счёта и следить за личной перепиской.</Typography>
			<Image src="https://leonardo.osnova.io/ef6195fa-59c3-5dac-b405-770028469df5/-/preview/700/-/format/webp/" alt="" height="400" width="600" />
		</Paper>
	);
};
